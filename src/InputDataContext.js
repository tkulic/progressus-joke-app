import React, { useState } from "react"

export const InputDataContext = React.createContext()

export function InputDataProvider(props) {
    const [nameInput, setNameInput] = useState("")
    const [dateInput, setDateInput] = useState("")
    const [userID] = useState(Math.floor(Math.random() * 10000 + 1))

    const contextValue = {
        nameInput,
        setNameInput,
        dateInput,
        setDateInput,
        userID
    }

    return (
        <InputDataContext.Provider value={contextValue}>
            {props.children}
        </InputDataContext.Provider>
    )
}