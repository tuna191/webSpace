import React from 'react';

import "./Title.css";
const Title = (props) => {
    const styleCss = ["styleTitle" , props.className];
    return (
        <div className={styleCss.join(" ")}>
           <p> {props.data}</p>
        </div>
    );
}

export default Title;
