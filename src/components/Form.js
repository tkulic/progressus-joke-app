import React, { useContext } from 'react'

import { InputDataContext } from "../InputDataContext"

export default function Form(props) {
    const {
        nameInput,
        setNameInput,
        dateInput,
        setDateInput,
        userID
    } = useContext(InputDataContext)

    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Ime i prezime
                    <input
                    type="text"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    maxLength={20}
                    required
                />
            </label>
            <label>
                Datum krštenja
                    <input
                    type="date"
                    value={dateInput}
                    onChange={e => setDateInput(e.target.value)}
                    required
                />
            </label>
            <label>
                ID
                    <input
                    type="number"
                    disabled
                    value={userID}
                />
            </label>
            <button>Potvrdi</button>
            <p className="footnote">Neautorizirana verzija</p>
        </form>
    )
}
