import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Problem Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent