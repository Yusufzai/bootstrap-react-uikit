import React from 'react';

const Textarea = (props) => {

    let requireType = '';
    let name = '';
    let id = '';
    let type = '';
    let placeholder = '';
    let classname = '';

    const required = props.required;
    const inputName = props.name;
    const inputId = props.id;
    const inputType = props.type;
    const inputPlaceholder = props.placeholder;
    const inputClassname = props.className;

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
    
    return (
        <>
            {/* <input name={`${name}`} id={`${id}`} type={`${type}`} className={`form-control ${classname}`} placeholder={`${placeholder}`} required={`${requireType}`} /> */}

            <textarea  name={`${name}`} id={`${id}`} type={`${type}`} className={`form-control ${classname}`} placeholder={`${placeholder}`} required={`${requireType}`}>{props.text}</textarea>
        </>
    )
}

export default Textarea;