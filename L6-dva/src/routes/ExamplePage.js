import React from 'react'
import { connect } from 'dva'
import { Table } from 'antd'

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "住址",
    dataIndex: "city",
    key: "city"
  }
];

export default connect(
  ({ example }) => ({ example }),
  {
    //namespace: 'example', effects:getProductData,需加namespace
    getProductData: payload => ({ type: 'example/getProductData', payload })

  }
)(
  function ExamplePage(props) {
    console.log('props', props)
    const { data } = props.example

    function dataSearch() {
      props.getProductData()
    }


    return (
      <div>
        ExamplePage
        <button onClick={dataSearch}>search</button>
        <Table columns={columns} dataSource={data}></Table>
      </div>
    )
  }
)

function P1(){
  this.abb = 'lal'
}
let P1son = new P1

let P2 = function(){}
let P3 = ()=>{
  this.a = 1
}
let P3son = new P3()
console.log('P3son',P3son.a)
console.log('p1---',P1.prototype)//{constructor: ƒ () _proto__: Object
console.log('p2---',P2.prototype)//{constructor: ƒ () _proto__: Object
console.log('p3---',P3.prototype)//undefined


