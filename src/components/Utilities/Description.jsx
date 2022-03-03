import React from 'react';

import "./Description.css"
const Description = (props) => {
    const styleDes = ["descriptionText", props.className];
    return (
        <p className={styleDes.join(" ")}>
            {props.text}
        </p>
    );
}

export default Description;
