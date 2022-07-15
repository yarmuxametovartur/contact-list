import React from 'react'
import "./button.css"

const Button = ({
    label,
    type = "button",
    disabled = false,
    handleClick,
    classNames,
    data

}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={() => handleClick(data)}
            className={classNames}>
            {label}
        </button>
    )
}

export default Button;