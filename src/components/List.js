import React from 'react';

const List = (props) => {

    // props.element
    let listElemnt = '';
    const element = props.element;

    if (element === 'ol') {
        listElemnt = <ol className={`${props.name}`}>{props.children}</ol>
    } else if (element === 'ul') {
        listElemnt = <ul className={`${props.name}`}>{props.children}</ul>
    }
    
    return (
        <>
            {listElemnt}
        </>
    )
}

export default List;