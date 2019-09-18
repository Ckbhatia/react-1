import React from 'react';
import '../App.css';


export default function Card(props) {
    const {name, src, text} = props;
    // console.log('props', props.data);

    return (
        // Card section
        <section className="card-section">
            <div className="card-container">
                <div className="card-top">
                    <img src={src} alt="user profile"></img>
                    <h3 className="user-header">{name}</h3>
                </div>
                <div className="card-bottom">
                    <p className="card-para">{text}</p>
                </div>
            </div>
        </section>
    )
}