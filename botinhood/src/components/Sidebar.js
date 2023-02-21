import React from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom'
import logo from '../assets/icon.png';
import assets from '../assets/assets.png';
import orders from '../assets/orders.png';
import overview from '../assets/overview.png';

function Sidebar(){
    return (
        <div id='sidebar'>
            <Link to='/'>
                <img src={logo} alt='Botinhood Logo' id='logo'/>
            </Link>
            <Link to='/assets'>
                <img src={assets} alt='Botinhood Logo' id='logo'/>
            </Link>
            <Link to='/orders'>
                <img src={orders} alt='Botinhood Logo' id='logo'/>
            </Link>
            <Link to='/overview'>
                <img src={overview} alt='Botinhood Logo' id='logo'/>
            </Link>
        </div>
    );
}

export default Sidebar;