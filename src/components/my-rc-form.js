
import React, { Component } from 'react'

export default function createForm(Cmp) {
  return class extends Component {
    getFieldDecorator = (filed) => InputCmp => {
      return React.cloneElement(InputCmp, {
        value: '',
        onChange: () => { }
      })
    }
    setFieldsValue = () => {
      //
    }
    getFieldsValue = () => { }
    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue
        }
      }
    }

    render() {
      return <Cmp {...this.props} {...this.getForm()}></Cmp>
    }
  }
}

// import React, { Component } from 'react'

// export default class my-rc-form extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
