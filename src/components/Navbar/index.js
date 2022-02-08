import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './navbar.css'


const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Accueil</Link>
            <Link to='/products'>Produits</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/shopping-cart' className='floating-cart'><Cart /></Link>
        </div>
    );
};

export default Navbar;