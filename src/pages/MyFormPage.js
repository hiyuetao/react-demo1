import React, { Component } from 'react'

function KFormCreat (Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.option = {}  // 存储配置字段值
      this.state = {} // 存储字段值
    }
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      })
    }
    getFieldDecorator = (field, option) => {
      this.option[field] = option;
      return InputCmp => (
        <div className="borderRed">
          {/* React.cloneElement( element, [props], [...children] )以 element 元素为样板克隆并返回新的 React 元素 */}
          {React.cloneElement(InputCmp, {
            name: field,
            value: this.state[field] || '',
            onChange: this.handleChange
          })}
        </div>
      )
    }
    getFieldsValues = () => {
      return { ...this.state }
    }
    getFieldValues = (field) => {
      return this.state[field]
    }
    validateFields = (callBack) => {
      const tem = { ...this.state }
      const err = []
      for(let key in this.option){
        if(tem[key]===undefined||tem[key]===''){
          err.push({
            [key]:'error '
          })
        }
      }
      if(err.length > 0){
        callBack(err, tem)
      }else{
        callBack(undefined, tem)
      }
    }
    render () {
      return (
        <div className="border">
          <Cmp {...this.props}
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValues={this.getFieldsValues}
            validateFields={this.validateFields}
          />
        </div>
      )
    }
  }
}
const nameRule = {
  require: true,
  message: 'please input ur name'
}
const passwordRule = {
  require: true,
  message: 'please input ur password'
}
class MyFormPage extends Component {
  submit = () => {
    const { getFieldsValues, validateFields } = this.props;
    validateFields((err, values)=>{
      if(err){
        console.log('error', err);
      }else {
        console.log('submit', values);
        
      }
    })

  } 
  render () {
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <div>MyFormPage</div>
        {
          getFieldDecorator('name', { rules: nameRule })(<input type="text" />)
        }
        {getFieldDecorator('password', { rules: passwordRule })(<input type="password" />)}
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}

export default KFormCreat(MyFormPage);