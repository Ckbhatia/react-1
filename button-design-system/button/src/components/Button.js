import React from 'react';
import '../App.css';

export default function Button(props) {
    
    const {color, bgColor, border, padding} = props;

    return <button 
            style={{backgroundColor: bgColor, color: color, border: border, padding: padding}} 
            className="btn">{props.text}
           </button>
}