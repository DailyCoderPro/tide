"use client";
import Modal from '@/components/core/Modal';
import React from 'react'

const Demo = () => {
  return (
    <div>
        <Modal 
        open={false}
        placeHolder='Open'
        onClose={()=>{console.log("Modal closed");}} 
        onOpen={()=>{console.log("Modal opened");}} 
        header='Test' 
        type='info' 
        footer={<div>Footer</div>}>
            <div>Content</div>
        </Modal>
    </div>
  )
}

export default Demo;