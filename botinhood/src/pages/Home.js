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
async function handleSubmit(e){
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

// +-----------------Getting Stock Info-------------------+
async function getStockData(botType){
    let res = await fetch("http://localhost:8000/api/v1/stock/getLongShort", {
        method: "GET",
        headers: {
            'Cache-Control': 'no-cache',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip,deflate,br'
        }
    })
    console.log('waiting for response');
    return await res.json();
}



function Home(){
    const [open, setOpen] = React.useState(false);
    const [stockList, setStockList]=React.useState(null);
    getAuthTokenAsync();
    // getStockData("LongShort")
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleLongShort = () => {
        // do something
        setOpen(false);
    };
    
    //   const handleMenuTwo = () => {
    //     // do something
    //     setOpen(false);
    //   };
    React.useEffect(() =>{
        getStockData('LongShort').then((res) => {
            
            const stockListArray = []
            
            for (let i = 0; i < res.length; i++) {
                const element = res[i];
                stockListArray.push(<p className='stock_item'>{element}</p>)
            }
            console.log(stockListArray)
            setStockList(stockListArray)
        })
    }, [])
    
    
    if(!isLoggedIn()){
        return(
            <div className='main_container'>
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
            <div className='main_container'>
                <div className='select_bot'>
                    <button className='dropdown' onClick={handleOpen}>Dropdown</button>
                    {open ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <button onClick={handleLongShort}>LongShort</button>
                            </li>
                            {/* <li className="menu-item">
                                <button onClick={handleMenuTwo}>Menu 1</button>
                            </li> */}
                        </ul>
                    ) : null}
                </div> 
                <div className='stock_list_container'>
                    {stockList} 
                </div>         
            </div>
        );
    }

}

export default Home;