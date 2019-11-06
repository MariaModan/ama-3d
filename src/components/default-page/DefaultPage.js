import React, { Component } from 'react';
import ItemsContainer from '../ItemsContainer'; 

class DefaultPage extends Component {
    render() {
        return (
            <div>
                <h1>Culori Noi</h1>
                <ItemsContainer />
            </div>
        )
    }
}

export default DefaultPage;
