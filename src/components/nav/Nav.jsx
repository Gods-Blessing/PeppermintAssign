import './Nav.css'

import pepper from '../../assets/peppermint.png';
import { useState } from 'react';

export default function Nav(){
    const [searchInput, setSearchInput] = useState('');

    return (
        <nav className='flex nav-container'>
            <div className='flex nav-title-container'>
                <img className='nav-img' src={pepper} alt="" />
                <h1>PepperMint</h1>
            </div>

            <ul className='flex other-links'>
                <li>Home</li>
                <li>About Us</li>
                <li>Solutions</li>
                <li>Products</li>
                <li>Resources</li>
                <li>Contact Us</li>
                <li>Careers</li>
            </ul>

            <input className='input-container' type="text" onChange={(e)=> setSearchInput(e.target.value)} value={searchInput}/>
            
        </nav>
    )
}