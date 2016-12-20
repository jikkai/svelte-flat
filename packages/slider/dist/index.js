(function ( global, factory ) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Slider = factory());
}(this, (function () { 'use strict';

function renderMainFragment ( root, component ) {
	var div = document.createElement( 'div' );
	div.className = "sf-slider";
	
	var div1 = document.createElement( 'div' );
	div1.className = "sf-slider__range";
	div1.style.cssText = "width: " + ( root.value ) + "%";
	
	div.appendChild( div1 );
	div.appendChild( document.createTextNode( "\n  " ) );
	
	var a = document.createElement( 'a' );
	a.className = "sf-slider__handle";
	a.style.cssText = "left: " + ( root.value ) + "%";
	
	div.appendChild( a );

	return {
		mount: function ( target, anchor ) {
			target.insertBefore( div, anchor );
		},
		
		update: function ( changed, root ) {
			div1.style.cssText = "width: " + ( root.value ) + "%";
			
			a.style.cssText = "left: " + ( root.value ) + "%";
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				div.parentNode.removeChild( div );
			}
		}
	};
}

function Slider ( options ) {
	options = options || {};

	var component = this;
	var state = options.data || {};

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

return Slider;

})));