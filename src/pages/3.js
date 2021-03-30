import React,{useState} from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default function Test3() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handle = () => { 
    setIsModalVisible(true)
    setTimeout(() => {
      setIsModalVisible(false)
    }, 3000);
  }
  return (
    <div>

      <Button onClick={ handle}>Open</Button>

      <Modal visible={isModalVisible} footer={null}>
        <p>5秒后即将关闭</p>
      </Modal>
    </div>
  )
}
