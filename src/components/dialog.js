import React, { Component } from 'react'
//
import { createPortal } from 'react-dom'
import { Button } from 'antd';

export default class dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.node = document.createElement('div');
    document.body.appendChild(this.node)
  }
  componentWillUnmount () {
    document.body.removeChild(this.node)
  }
  render () {
    const { handleClose, children, styleObj } = this.props;
    return createPortal(
      <div style={{...styleObj}} className="dialog">
        <h1>dialog</h1>
        {children}
        <Button onClick={handleClose}>取消</Button>
      </div>,
      this.node
    )
  }
}
