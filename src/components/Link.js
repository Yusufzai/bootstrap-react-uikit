import React from 'react';

const Link = (props) => {
    return (
        <>
            <a href={`${props.to}`} className={`${props.className}`} onClick={props.handleClick}>{props.children}</a>
        </>
    )
}

export default Link;