import React from 'react';

const Input = (props) => {

    let requireType = '';
    let name = '';
    let id = '';
    let type = '';
    let placeholder = '';
    let classname = '';
    let value = '';

    const required = props.required;
    const inputName = props.name;
    const inputId = props.id;
    const inputType = props.type;
    const inputPlaceholder = props.placeholder;
    const inputClassname = props.className;
    const inputValue = props.value;

    if (required !== undefined) {
        requireType = required;
    }
    if (inputName !== undefined) {
        name = inputName;
    }
    if (inputId !== undefined) {
        id = inputId;
    }
    if (inputType !== undefined) {
        type = inputType;
    }
    if (inputPlaceholder !== undefined) {
        placeholder = inputPlaceholder;
    }
    if (inputClassname !== undefined) {
        classname = inputClassname;
    }
    if (inputValue !== undefined) {
        value = inputValue;
    }
    
    return (
        <>
            <input name={`${name}`} id={`${id}`} type={`${type}`} className={`form-control ${classname}`} placeholder={`${placeholder}`} value={`${value}`} required={`${requireType}`} />
        </>
    )
}

export default Input;