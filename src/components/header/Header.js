import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './header.scss';

import DesktopNav from './DesktopNav';
import PhoneNav from './PhoneNav';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <MediaQuery minDeviceWidth={1025}>
                    <DesktopNav />
                </MediaQuery>
                <MediaQuery minDeviceWidth={768} maxDeviceWidth={1024}>
                    <p>you are not a laprop screen</p>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768}>
                    <PhoneNav />
                </MediaQuery>
                
            </header>
        )
    }
}

export default Header;
