import React, { Component } from 'react'

function Child(){
  return <div>child</div>
}
// 高阶组件：函数，传入一个组件返回一个处理过的组件
const foo = Cmp => props => {
  return (
    <div style={{background:'lightBlue'}}>
      <Cmp {...props}/>
    </div>
  )  
}
const foo2 = Cmp => props =>{
  return (
    <div style={{border:"solid 1px red"}}>
      <Cmp {...props} />
    </div>
  )
}
export default class HocPage extends Component {
  render() {
    const Foo = foo2(foo(Child));
    return (
      <div>
        <h1>高阶组件</h1>
        <Foo />
      </div>
    )
  }
}
