import React, { Component } from 'react'
import store from '../store/reduxStore'
export default class reduxPage extends Component {
  componentDidMount(){
    store.subscribe(()=>{
      // 更新的两种方法，也可以直接在index页执行一次ReactDOM.render
      this.forceUpdate()
      // this.setState({})
    })
  }
  render() {
    return (
      <div>
        <h1>reduxPage</h1>
        <p>Count: {store.getState()}</p>
        <button onClick={()=>store.dispatch({type:'add'})}>加1</button>
        <button onClick={()=>store.dispatch({type:'minus'})}>减1</button>
      </div>
    )
  }
}
