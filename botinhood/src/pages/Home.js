import React from 'react';
import '../styles/Home.css'; // import css file
import alpaca_logo from '../assets/alpaca_logo.png'; // import logo
import Utils from '../utils/Utils'; // import utility functions
import StockItem from '../components/StockItem'; // import custom component

const CLIENT_ID = '0b17ccc305d2be4a87d6d54135ea0f28'; // Alpaca client ID
const REDIRECT_URI = 'http://localhost:3000/'; // Redirect URI

// This method will fire when our button is pressed
async function handleSubmit(e){
    // function to handle user authentication with Alpaca
    // we will redirect our users to the following URL so that they can authenticate with Alpaca.
    const alpaca_oauth = `https://app.alpaca.markets/oauth/authorize` +
    `?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=account:write%20trading%20data`;
    // Redirect
    document.location.href = alpaca_oauth;
};

function isLoggedIn(){
    // function to check if user is logged in
    const auth_token = window.localStorage.getItem("auth-token")
    console.log(auth_token)
    if (auth_token === null) return false;
    else return true;
}

async function getAuthTokenAsync(){
    // function to get authentication token for the user
    if (window.localStorage.getItem('auth-token') === null){
        var oauth_code = new URLSearchParams(window.location.search).get('code');
        const auth_token = await Utils.getAuthToken(oauth_code);
        console.log(auth_token)
        window.localStorage.setItem('auth-token', auth_token)
    }
}

// +-----------------Getting Stock Info-------------------+
async function getStockData(botType){
    // function to fetch stock data from the API
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

// +-----------------Set Stocks from input-------------------+
async function addStockData(e){
    // function to add new stock data to the API
    let stockData = await getStockData("LongShort");
    let newStock = e.target[0].value.toUpperCase();
    
    stockData.push(newStock)
    console.log(stockData);
    await fetch("http://localhost:8000/api/v1/stock/setLongShort", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': "application/json",
            'Cache-Control': 'no-cache',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip,deflate,br',
            'Connection': 'keep-alive'
        },
        body:  JSON.stringify({
            "stocks": stockData
        })
    })
    // console.log('waiting for response');
}

function Home(){
    // main component for the home page
    const [open, setOpen] = React.useState(false); // state for dropdown menu
    const [stockList, setStockList]=React.useState(null); // state for list of stocks
    
    getAuthTokenAsync();  // get authentication token when component mounts
    
    const handleOpen = () => {
        // function to handle opening/closing of dropdown menu
        setOpen(!open);
    };

    const handleLongShort = () => {
        // function to handle user selection of LongShort bot
        setOpen(false);
    };
    
    React.useEffect(() =>{
        // effect to fetch stock data when component mounts
        getStockData('LongShort').then((res) => {
            
            const stockListArray = []
            
            for (let i = 0; i < res.length; i++) {
                const element = res[i];
                stockListArray.push(<StockItem name={element}/>)
            }
            setStockList(stockListArray)
        })
    }, [])
    
    
    if(!isLoggedIn()){
        // if user is not logged in, display Alpaca authentication button
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
        // if user is logged in, display dropdown menu and stock list
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
                <form onSubmit={addStockData}>
                    <input className='new_stock_input' type='text' name='stock_input'></input>
                    <button className='new_stock_btn' type='submit'>+</button>
                </form>
                <div className='stock_list_container'>
                    {stockList} 
                </div>         
            </div>
        );
    }
}

export default Home;