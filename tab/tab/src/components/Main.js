import React, { Component } from 'react';
import '../App.css';
import Navigation from './Navigation'
import Card from './Card'

 class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            active: 'Starks'
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json')
        .then((data) => data.json())
        .then((data) => this.setState({data: data.houses}))
    }

    handleNav = (evt) => {
        const text = evt.target.innerText;
        this.setState({active: text})
    }

    render() {
        return (
            // Header
            <main className="main-container">
                {/* Navigation */}
                {this.state.data &&
                    <Navigation 
                        handleNav={this.handleNav}
                        data={this.state.data}
                        active={this.state.active}
                    />
                }

                {/* Cards */}
                {this.state.data && 
                    <section className="card-section">
                        <div className="card-container">
                            {this.state.data &&
                                this.state.data.filter(title => title.name === this.state.active)
                                .map(family => family.people.map((member, index) => { 
                                    return <Card key={index}
                                                name={member.name}
                                                src={member.image}
                                                text={member.description} 
                                            /> 
                                    }
                                ))
                            }
                        </div>
                    </ section>
                }
            </main>
        )
    }
}

export default Main;