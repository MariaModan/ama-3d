import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/Logo-AMA3D-black.png';
import shoppingBag from '../../assets/shopping-bag.png';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <nav id='top-nav'>
                    <img src={logo}/>
                    <ul>
                        <li><Link>Despre Noi</Link></li>
                        <li><Link>Contact</Link></li>
                        <li><Link><img src={shoppingBag}/></Link></li>
                    </ul>
                </nav>
                <nav id='materials-nav'>
                    <ul>
                        {/* {this.props.categories.map( (category, index) => {
                            return <li key={`nav-${index}`}><Link to={`${category}`} >{category.toUpperCase()}</Link></li>
                        })} */}
                        <li><Link to='/pla'>PLA</Link></li>
                        <li><Link to='/abs'>ABS</Link></li>
                        <li><Link to='/abs-t'>ABS-T</Link></li>
                        <li><Link to='/petg'>PETG</Link></li>
                        <li><Link to='/marblejet'>MARBLEJET</Link></li>
                        <li><Link to='/hips'>HIPS</Link></li>
                        <li><Link to='/tpe32'>TPE32</Link></li>
                        <li><Link to='/tpe88'>TPE88</Link></li>
                        <li><Link to='/pc-abs'>PC/ABS</Link></li>
                        <li><Link to='/pva'>PVA</Link></li>
                        <li><Link to='/petg-cf'>PETG/CF</Link></li>
                        <li><Link to='/pajet'>PAJET</Link></li>
                        <li><Link to='/frjet'>FRJET</Link></li>
                        
                        
                        
                    </ul>
                </nav>
                
            </header>
        )
    }
}

export default Header;
