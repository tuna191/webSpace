import React from 'react';

import "./pageImg.css"

const Pageimg = (props) => {
   
    return (
       <>
       <img className='Pageimg slide-in-left' src={props.data}/>
       
       </>
    );
}

export default Pageimg;
