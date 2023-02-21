import React from 'react';
// import dotenv from 'dotenv';
import '../styles/Home.css';

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
}

function Home(){
    return (
        <div id='main_container'>
            <button onClick={handleSubmit}>
                <input className="button-width" type="submit" value="Sign in with Alpaca" />
            </button>
        </div>
    );
}

export default Home;