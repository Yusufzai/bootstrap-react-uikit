import React from 'react';

const Col = (props) => {

    let gridCol = '';

    const xxl = props.xxl;
    const xl = props.xl;
    const lg = props.lg;
    const md = props.md;
    const sm = props.sm;
    const xs = props.xs;
    const col = props.col;
    
    if (xxl !== undefined) {
        gridCol += ' col-xxl-' + xxl;
    }

    if (xl !== undefined) {
        gridCol += ' col-xl-' + xl;
    }
    
    if (lg !== undefined) {
        gridCol += ' col-lg-' + lg;
    }
    
    if (md !== undefined) {
        gridCol += ' col-md-' + md;
    }

    if (sm !== undefined) {
        gridCol += ' col-sm-' + sm;
    }
    
    if (xs !== undefined) {
        gridCol += ' col-xs-' + xs;
    }
    
    if (col !== undefined) {
        gridCol += ' col-' + col;
    }
        
    // console.log(gridCol)
    return (
        <>
            {/* <div className="col-md-12">{props.children}</div> */}
            <div className={`${gridCol}`}>{props.children}</div>
        </>
    )
}

export default Col;