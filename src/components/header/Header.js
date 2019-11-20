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
                <MediaQuery maxDeviceWidth={1024}>
                    <PhoneNav />
                </MediaQuery>
                
            </header>
        )
    }
}

export default Header;
