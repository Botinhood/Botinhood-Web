// Importing required dependencies
import React, {useState, useEffect} from 'react';
import '../styles/Assets.css';

// Importing custom component
import StockRow from '../components/StockRow';

// Setting up constants
// const CLIENT_ID = '0b17ccc305d2be4a87d6d54135ea0f28';
// const REDIRECT_URI = 'http://localhost:3000/';

// Function to get stock data from an API endpoint
async function getStockData(botType){
    let res = await fetch("http://localhost:8000/api/v1/stock/getBotBars", {
        method: "GET",
        headers: {
            'Cache-Control': 'no-cache',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip,deflate,br'
        }
    })
    return await res.json();
}

// Initializing a temporary data for stocks
const tempStockData = [
    {props:{children:'None'}},
]

// Defining the Assets component
function Assets(){
    // Initializing state variables using the useState hook
    // const [myStocks, setMyStocks] = useState(tempStockData)
    const [stockList, setStockList]= useState(tempStockData);
    const [toggleStocks, setToggleStocks] = useState(false)
    const [totalMoney, setTotalMoney] = useState(0.0)

    // Using useEffect hook to run the getStockData function at a fixed interval and update the state variable
    useEffect(() =>{
        const interval = setInterval(() => {
            getStockData('LongShort').then((res) => {
                // Sorting the response data and updating the state variable
                res.sort((a, b) => {
                    if (a.name < b.name) { return -1 }
                    if (a.name > b.name) { return 1 }
                    return 0
                })
                setStockList(res)
                setToggleStocks(true)
            })
        }, 10)
    
        return () => clearInterval(interval)
    }, [])

    // Using another useEffect hook to run the getStockData function at a fixed interval and update the state variable for total money
    useEffect(() =>{
        const interval = setInterval(() => {
            getStockData('LongShort').then((res) => {
                setTotalMoney(0.0)
                // Calculating the total money by multiplying volume and close price and updating the state variable
                for (let i = 0; i < res.length; i++) {
                    let Volume = res[1].bar[1].Volume
                    let ClosePrice = res[1].bar[1].ClosePrice
                    if (typeof(Volume) != "undefined" && typeof(Volume) != "undefined" ){
                    let totalValue = totalMoney + ( Volume * ClosePrice/30 )
                    
                    setTotalMoney(totalValue)}
                  } 
            })
        }, 10)
    
        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [])

    // Rendering the component
    return (
        <div className='main_container'>
            <div id='portfolio_container'>
                <h1 className='center'>Portfolio</h1>
                <div className='scroll_container'>
                    {/* Displaying the stock rows */}
                    {toggleStocks && stockList.map((post) =>
                        <StockRow key={1} content={post}/>
                    )}
                </div>
            </div>
            <div id='totals_container'>
                <h1 className='center'>Total money</h1>
                <h1 className='center'>${totalMoney.toFixed(2)}</h1>
            </div>
        </div>
    );
}

export default Assets;