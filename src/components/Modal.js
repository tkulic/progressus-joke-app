import React from 'react'

import logo from "../img/logo.png"

export default function Modal(props) {
    function handleClick(e) {
        e.preventDefault()
        props.toggleModal(false)
    }

    return (
        <div className="modal">
            <div className="container">
                <p><strong>{props.content.title}</strong></p>
                <img className="logo" src={logo} alt="logo" />
                <p>{props.content.message}</p>
                <button onClick={handleClick}>
                    {props.content.button}
                </button>
            </div>
        </div>
    )
}
