import React from 'react';
import '../styles/Header.css';
import profilePic from '../assets/profile.png'

function Header(){
    return(
        <div className='header'>
            <img className='profile-img' src={profilePic} alt='Profile'></img>
            <p className='profile-name'>John Doe</p>
        </div>
    )
}

export default Header;