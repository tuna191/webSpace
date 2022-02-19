import React from 'react';

const Container = (props) => {
    const cssStyle = ["backgroud__container" , props.className ];
    return (
        <div className={cssStyle.join(" ")}>
            {props.children}
        </div>
    );
}

export default Container;
