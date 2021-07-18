import React from 'react';

const FormGroup = (props) => {
    return (
        <>
            <div class={`form-group ${props.className}`}>{props.children}</div>
        </>
    )
}

export default FormGroup;