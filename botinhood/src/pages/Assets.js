import React, {useState, useEffect} from 'react';
import '../styles/Assets.css';
import graph from '../assets/temp-graph.png'

import StockRow from '../components/StockRow';

const CLIENT_ID = '0b17ccc305d2be4a87d6d54135ea0f28';
const REDIRECT_URI = 'http://localhost:3000/';

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


const tempStockData = [
    {props:{children:'None'}},
]

function Assets(){
    const [myStocks, setMyStocks] = useState(tempStockData)
    const [stockList, setStockList]= useState(tempStockData);

    useEffect(() =>{
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

    return (
        <div className='main_container'>
            
            <div id='portfolio_container'>
                
                <h1 class='center'>Your Portfolio</h1>

                <img id='graph' src={graph} alt="graph" />

                {stockList.map((post) =>
                    <StockRow content={post}/>
                )}
                <div>
                    
                </div>

            </div>

        </div>
    );
}

export default Assets;