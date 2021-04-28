import React, { useState } from 'react'
import Modal from './Modal'
import Card from './Card'
import Form from './Form'

import { intro, outro } from "../modalContent"
import { InputDataProvider } from "../InputDataContext"

export default function App() {
  const [isModalActive, setIsModalActive] = useState(true)
  const [modalContent, setModalContent] = useState(intro)

  function handleSubmit(e) {
    e.preventDefault()
    setIsModalActive(true)
    setModalContent(outro)
  }

  return (
    <div className="container">
      <InputDataProvider>
        {isModalActive && <Modal toggleModal={setIsModalActive} content={modalContent} />}
        <Card />
        <Form handleSubmit={handleSubmit} />
      </InputDataProvider>
    </div>
  )
}
