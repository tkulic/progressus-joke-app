import React, { useContext } from 'react'
import logo from "../img/logo.svg"
import qrCode from "../img/qr-code.svg"

import { InputDataContext } from "../InputDataContext"

export default function Card() {
    const { nameInput, dateInput, userID } = useContext(InputDataContext)

    return (
        <div className="card-container">
            <a href="https://www.facebook.com/Progressusadinfinitum/" target="_blank" rel="noreferrer"><img className="qr-code" src={qrCode} alt="qr code with facebook logo" /></a>
            <img className="logo" src={logo} alt="logo" />

            <h2 className="card-title">Klub vjernosti</h2>
            <div className="card-member-data">
                <div className="member-data-item">
                    <p className="fineprint">Datum krštenja</p>
                    <p className="member-data-item-info">{dateInput}</p>
                </div>
                <div className="member-data-item">
                    <p className="fineprint">Ime i prezime</p>
                    <p className="member-data-item-info">{nameInput}</p>
                </div>
                <div className="member-data-item">
                    <p className="fineprint">ID</p>
                    <p className="member-data-item-info">{userID}</p>
                </div>
            </div>
        </div>
    )
}
