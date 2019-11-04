import React, { Component } from 'react';
import './NavBar.scss';
import logo from '../../image/Logo-AMA3D-black.png';
import shoppingBag from '../../image/shopping-bag.png';

class NavBar extends Component {
    render() {
        return (
            <nav className='nav-bar'>
                <div id='top-nav'>
                    <img src={logo}/>
                    <ul>
                        <li>Despre Noi</li>
                        <li>Contact</li>
                        <li><img src={shoppingBag}/></li>
                    </ul>
                </div>
                <div id='materials-nav'>
                    <ul>
                        <li>Materiale Populare</li>
                        <li>ABS NOT DEAD</li>
                        <li>ASA</li>
                        <li>ABS-T</li>
                        <li>CFJET</li>
                        <li>FRJET</li>
                        <li>GLOWJET</li>
                        <li>HIPS</li>
                        <li>MARBLEJET</li>
                        <li>PAJET</li>
                        <li>PC/ABS</li>
                        <li>PETG</li>
                        <li>PLA</li>
                        <li>RUBBERJET</li>
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default NavBar;
