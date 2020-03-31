import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
class ReactReduxPage extends Component {
  render() {
    const { counter, add, minus } = this.props;
    return (
      <div>
        <h1>ReactReduxPage</h1>
        <p>counter：{counter}</p>
        <Button onClick={add}>+1</Button>
        <Button onClick={minus}>-1</Button>
      </div>
    )
  }
}

export default connect(
  //mapStateToProps
  state =>{
    return { counter: state}
  },
  // mapDispatchToProps
  {
    add:()=>{
      return {type:'add'}
    },
    minus:()=>({type:'minus'})
  } 
)(ReactReduxPage)