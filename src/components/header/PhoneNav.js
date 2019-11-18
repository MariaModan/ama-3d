import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo-AMA3D-black.png';
import shoppingBag from '../../assets/shopping-bag.png';

class PhoneNav extends Component {
    render() {
        return (
            <div id='top-nav'>
                <img  src={logo} alt='logo' class='logo'/>
               <Link><img src={shoppingBag} alt='shopping-bag' class='bag-img'/></Link>
                <div className='dropdown'>
                    {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Materiale
                    </button> */}
                    <div class='hamburger'>
                        <div class='bar1'></div>
                        <div class='bar2'></div>
                        <div class='bar2'></div>
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><Link>Despre Noi</Link></li>
                        <li><Link>Contact</Link></li>
                        <li className="dropdown-item"><Link to='/pla'>PLA</Link></li>
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
                    </div>
                </div>     
            </div>
        )
    }
}

export default PhoneNav;
