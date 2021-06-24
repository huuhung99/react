import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">@HuuHung99</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent