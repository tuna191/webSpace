import React from 'react';

import "./Description.css"
const Description = (props) => {
    return (
        <p className='descriptionText'>
            {props.text}
        </p>
    );
}

export default Description;
