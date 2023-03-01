import React from 'react';
// import env from "react-dotenv";
import '../styles/Home.css';
import alpaca_logo from '../assets/alpaca_logo.png';
import Utils from '../utils/Utils'

// we need to call dotenv.config() before attempting to access env variables
// dotenv.config();

const CLIENT_ID = '0b17ccc305d2be4a87d6d54135ea0f28';
const REDIRECT_URI = 'http://localhost:3000/';

// This method will fire when our button is pressed
async function handleSubmit(event){
    // we will redirect our users to the following URL so that they can authenticate with Alpaca.
    const alpaca_oauth = `https://app.alpaca.markets/oauth/authorize` +
    `?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=account:write%20trading%20data`;
    // Redirect
    document.location.href = alpaca_oauth;
};

function isLoggedIn(){
    const auth_token = window.localStorage.getItem("auth-token")
    if (auth_token === null) return false;
    else return true;
}
async function getAuthTokenAsync(){
    if (window.localStorage.getItem('auth-token') === null){
        var oauth_code = new URLSearchParams(window.location.search).get('code');
        const auth_token = await Utils.getAuthToken(oauth_code);
        window.localStorage.setItem('auth-token', auth_token)
    }
}

function Home(){
    getAuthTokenAsync();
    console.log(isLoggedIn());
    if(!isLoggedIn()){
        return(
            <div id='main_container'>
                <button id='alpacaButton' onClick={handleSubmit}>
                    <p className="button-width">Sign in with Alpaca</p>
                </button>
                <div className="content-footer">
                    <label className="content-label"> Powered by </label>
                    <img src={alpaca_logo} alt='Alpaca Logo' />
                </div>
            </div>
        );
    }else{
        return(
            <div id='main_container'>
                <p>{window.localStorage.getItem('auth-token')}</p>
            </div>
        );
    }

}

export default Home;