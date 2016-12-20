import React from 'react'

class HomeRouter extends React.Component {
  render () {
    return (
      <div className="examples-router examples-router-home">
        <div className="examples-logo"></div>
        <h2>Svelte Flat</h2>
        <p>一套基于Svelte开发的UI组件库，轻松使用，简单上手，不依赖于任何框架。</p>

        <h3>安装</h3>
        <p>你可以使用<code>npm</code>的方式安装，当然我们更推荐使用<code>yarn</code>安装。</p>
        <pre>
          <code>
            $yarn add svelte-flat
          </code>
        </pre>

        <h3>全局引入</h3>
        <p>全局引入，方便快捷。</p>
        <pre>
          <code>
            import Flat from 'svelte-flat' {'\n'}
            import 'svelte-flat/packages/theme-default/dist/index.css'
          </code>
        </pre>

        <h3>单一组件引入</h3>
        <p>按需引入组件，缩减代码量。</p>
        <pre>
          <code>
            import {'{'} Button {'}'} from 'svelte-flat' {'\n'}
            import 'svelte-flat/packages/theme-default/dist/button.css'
          </code>
        </pre>
      </div>
    )
  }
}

export default HomeRouter
