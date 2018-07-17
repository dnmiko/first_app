import React, { Component } from 'react';

class ButtonApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ display: "inline" }}>
                <button onClick={this.props.method}>{this.props.name}</button>
            </div>

        );
    }
}

export default ButtonApp;