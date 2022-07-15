import React from 'react'
import './input.css'

const Input = ({
    placeholder,
    handleChange,
    value,
    fieldName
}) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => handleChange(e, fieldName)}
            value={value} />
    )
}

export default Input;