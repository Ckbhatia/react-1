import React from 'react';
import '../App.css';

export default function Navigation() {
    // Navigation text
    const navText = ['Starks', 'Lannisters', 'Baratheons', 'Targayens', 'Greyjoys',
     'Tyrells', 'Tullys', 'Redwyn', 'Freys', 'Arryns', 'Dothrakle'];
    
    return (
            <section className="navigation-section wrapper">
                {/* Navigation */}
                <nav className="navigation-container">
                    <ul className="navigation-list-container">
                        {navText.map((text, index) => {
                            return <li key={index} className="list-item"><a className="nav-link" href={text}>{text}</a></li>
                        })}
                    </ul>
                </nav>
            </section>
    )
}