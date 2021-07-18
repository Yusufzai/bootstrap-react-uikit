import React from 'react';

const ProgressBar = (props) => {
    const progressStyle = {
        width: props.valuenow +'%'
    }
    
    return (
        <>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={`${props.valuenow}`} aria-valuemin={`${props.valuemin}`} aria-valuemax={`${props.valuemax}`}  style={progressStyle}></div>
            </div>
        </>
    )
}

export default ProgressBar;