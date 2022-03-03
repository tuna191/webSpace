import React from 'react';

import "./pageImg.css"

const Pageimg = (props) => {
   const stylePage = ["Pageimg" , props.className]
    return (
       <img className={stylePage.join(" ")} src={props.data}/>
    );
}

export default Pageimg;
