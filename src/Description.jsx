import React, { Component } from 'react';

class Description extends Component {
    constructor(props){
        super(props)
    };
    render() {
        return (
            <div>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Description;
