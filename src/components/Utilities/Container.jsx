import React from 'react';

import "./Container.css";
const Container = (props) => {
    const cssStyle = ["backgroud__container" , props.className ];
    return (
        <div className={cssStyle.join(" ")}>
            {props.children}
        </div>
    );
}

export default Container;
