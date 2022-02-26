import React from 'react';

import "./Gird.css"
const Gird = (props) => {
    const cssStyle = ["grid__view" , props.className]
    return (
        <div className={cssStyle.join(" ")}>
            {props.children}
        </div>
    );
}

export default Gird;
