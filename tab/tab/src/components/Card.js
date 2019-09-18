import React from 'react';
import '../App.css';


export default function Card(props) {
    const {name, src, text} = props;

    return (
            <div className="card">
                <div className="card-top">
                    <img src={src} alt="user profile"></img>
                    <h3 className="user-header">{name}</h3>
                </div>
                <div className="card-bottom">
                    <p className="card-para">{text}</p>
                </div>
            </div>
    )
}