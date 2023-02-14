import React from 'react';
// import { Link } from 'react-router-dom'
// import '../styles/login.css';
// import LoginLogo from '../assets/loginLogo.png';

function Home(){
    const personalApi = require('../utils/alpacaTrader').default();
    personalApi.assets();
    return (
        <div id='main_container'>
            <p>Hello World</p>
        </div>
    );
}

export default Home;