import React, {useState, useEffect} from 'react';
import '../styles/Assets.css';
import graph from '../assets/temp-graph.png'

import StockRow from '../components/StockRow';

const CLIENT_ID = '0b17ccc305d2be4a87d6d54135ea0f28';
const REDIRECT_URI = 'http://localhost:3000/';



// +-----------------Getting Stock Info-------------------+
async function getStockData(botType){
    let res = await fetch("http://localhost:8000/api/v1/stock/getBotBars", {
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


const tempStockData = [
    {props:{children:'None'}},
]

function Assets(){
    const [myStocks, setMyStocks] = useState(tempStockData)
    const [stockList, setStockList]= useState(tempStockData);
    const [toggleStocks, setToggleStocks] = useState(false)

    useEffect(() =>{
        getStockData('LongShort').then((res) => {
            console.log(res)
            setStockList(res)
            setToggleStocks(true)
        })
    }, [])

    return (
        <div className='main_container'>
            
            <div id='portfolio_container'>
                
                <h1 className='center'>Your Portfolio</h1>

                <img id='graph' src={graph} alt="graph" />

                <div>
                    {/* {stockList}  */}
                </div>
                
                {toggleStocks && stockList.map((post) =>
                    <StockRow key={1} content={post}/>
                )}


                {/* {stockList.map((post) =>
                    <StockRow content={post}/>
                )} */}

            </div>

        </div>
    );
}

export default Assets;