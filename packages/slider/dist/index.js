(function ( global, factory ) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Slider = factory());
}(this, (function () { 'use strict';

var template = (function () {
  return {
    data: function () {
      return {
        width: 0,
        offset: 0,
        dragging: false
      }
    },
    methods: {
      onButtonDown: function (event) {
        this.onDragStart(event)
        window.addEventListener('mousemove', this.onDragging.bind(this))
        window.addEventListener('mouseup', this.onDragEnd.bind(this))
        window.addEventListener('contextmenu', this.onDragEnd.bind(this))

      },

      onDragStart: function (event) {
        var slider = this.refs.slider
        var range = this.refs.range

        this.set({
          width: slider.clientWidth,
          offset: event.clientX - range.clientWidth,
          dragging: true
        })
      },

      onDragging: function (event) {
        if (this.get('dragging')) {
          var clientX = event.clientX
          var width = this.get('width')
          var offset = this.get('offset')

          var newRange = event.clientX - offset
          var newValue = parseInt(newRange / width * 100)
          if (newValue > 100) newValue = 100
          if (newValue < 0) newValue = 0

          this.set({ value: newValue })
        }
      },

      onDragEnd: function () {
        if (this.get('dragging')) {
          this.set({ dragging: false })
          window.removeEventListener('mousemove', this.onDragging)
          window.removeEventListener('mouseup', this.onDragEnd)
          window.removeEventListener('contextmenu', this.onDragEnd)
        }
      }
    }
  }
}());

function renderMainFragment ( root, component ) {
	var div = document.createElement( 'div' );
	component.refs.slider = div;
	div.className = "sf-slider";
	
	var div1 = document.createElement( 'div' );
	component.refs.range = div1;
	div1.className = "sf-slider__range";
	div1.style.cssText = "width: " + ( root.value ) + "%";
	
	div.appendChild( div1 );
	div.appendChild( document.createTextNode( "\n  " ) );
	
	var span = document.createElement( 'span' );
	span.className = "sf-slider__handle";
	span.style.cssText = "left: " + ( root.value ) + "%";
	
	function mousedownHandler ( event ) {
		component.onButtonDown(event);
	}
	
	span.addEventListener( 'mousedown', mousedownHandler, false );
	
	function mouseupHandler ( event ) {
		component.onDragEnd(event);
	}
	
	span.addEventListener( 'mouseup', mouseupHandler, false );
	
	div.appendChild( span );

	return {
		mount: function ( target, anchor ) {
			target.insertBefore( div, anchor );
		},
		
		update: function ( changed, root ) {
			div1.style.cssText = "width: " + ( root.value ) + "%";
			
			span.style.cssText = "left: " + ( root.value ) + "%";
		},
		
		teardown: function ( detach ) {
			if ( component.refs.slider === div ) component.refs.slider = null;
			if ( component.refs.range === div1 ) component.refs.range = null;
			span.removeEventListener( 'mousedown', mousedownHandler, false );
			span.removeEventListener( 'mouseup', mouseupHandler, false );
			
			if ( detach ) {
				div.parentNode.removeChild( div );
			}
		}
	};
}

function Slider ( options ) {
	options = options || {};

	var component = this;
this.refs = {}
	var state = Object.assign( template.data(), options.data );

	var observers = {
		immediate: Object.create( null ),
		deferred: Object.create( null )
	};

	var callbacks = Object.create( null );

	function dispatchObservers ( group, newState, oldState ) {
		for ( var key in group ) {
			if ( !( key in newState ) ) continue;

			var newValue = newState[ key ];
			var oldValue = oldState[ key ];

			if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

			var callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( var i = 0; i < callbacks.length; i += 1 ) {
				var callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}

	this.fire = function fire ( eventName, data ) {
		var handlers = eventName in callbacks && callbacks[ eventName ].slice();
		if ( !handlers ) return;

		for ( var i = 0; i < handlers.length; i += 1 ) {
			handlers[i].call( this, data );
		}
	};

	this.get = function get ( key ) {
		return key ? state[ key ] : state;
	};

	this.set = function set ( newState ) {
		var oldState = state;
		state = Object.assign( {}, oldState, newState );
		
		dispatchObservers( observers.immediate, newState, oldState );
		if ( mainFragment ) mainFragment.update( newState, state );
		dispatchObservers( observers.deferred, newState, oldState );
	};

	this._mount = function mount ( target, anchor ) {
		mainFragment.mount( target, anchor );
	}

	this.observe = function ( key, callback, options ) {
		var group = ( options && options.defer ) ? observers.deferred : observers.immediate;

		( group[ key ] || ( group[ key ] = [] ) ).push( callback );

		if ( !options || options.init !== false ) {
			callback.__calling = true;
			callback.call( component, state[ key ] );
			callback.__calling = false;
		}

		return {
			cancel: function () {
				var index = group[ key ].indexOf( callback );
				if ( ~index ) group[ key ].splice( index, 1 );
			}
		};
	};

	this.on = function on ( eventName, handler ) {
		var handlers = callbacks[ eventName ] || ( callbacks[ eventName ] = [] );
		handlers.push( handler );

		return {
			cancel: function () {
				var index = handlers.indexOf( handler );
				if ( ~index ) handlers.splice( index, 1 );
			}
		};
	};

	this.teardown = function teardown ( detach ) {
		this.fire( 'teardown' );

		mainFragment.teardown( detach !== false );
		mainFragment = null;

		state = {};
	};

	this.root = options.root;
	this.yield = options.yield;

	var mainFragment = renderMainFragment( state, this );
	if ( options.target ) this._mount( options.target );
}

Slider.prototype = template.methods;

return Slider;

})));