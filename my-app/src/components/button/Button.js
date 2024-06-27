import React from 'react';
// import './Button.scss';
import './Button.module.css';
const Button = (props) => {
    return (
        <div>
            <button className={`button ${props.className || ""}`}>{props.children}</button> 
        </div>
    );
};

export default Button;