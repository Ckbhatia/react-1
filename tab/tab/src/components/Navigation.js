import React from 'react';
import '../App.css';

export default function Navigation(props) {
    const { data } = props;

    return (
            <section className="navigation-section wrapper">
                {/* Navigation */}
                <nav className="navigation-container">
                    <ul onClick={props.handleNav} className="navigation-list-container">
                    {/* Map the data and exract family */}
                        {data.map((family, index) => {
                            return <li key={index} className="list-item">
                                      <button className="nav-btn">{family.name}</button>
                                   </li>
                        })}
                    </ul>
                </nav>
            </section>
    )
}