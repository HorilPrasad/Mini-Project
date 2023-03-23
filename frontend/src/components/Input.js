import React from "react";
import "./Input.css"

export const Input = ({
    type,
    placeholder,
    name,
    value,
    onChange
}) =>{
    return(
        <input className="input-box"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        />
    )
}