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
    const [totalMoney, setTotalMoney] = useState(0.0)

    useEffect(() =>{
        const interval = setInterval(() => {
            getStockData('LongShort').then((res) => {
                res.sort((a, b) => {
                    if (a.name < b.name) { return -1 }
                    if (a.name > b.name) { return 1 }
                    return 0
                })
                // console.log(res)
                setStockList(res)
                setToggleStocks(true)
            })
        }, 10)
    
        return () => clearInterval(interval)
    }, [])



    useEffect(() =>{
        const interval = setInterval(() => {
            getStockData('LongShort').then((res) => {
                setTotalMoney(0.0)
                for (let i = 0; i < res.length; i++) {
                    let totalValue = totalMoney + ( res[1].bar.value.Volume * res[1].bar.value.ClosePrice )
                    setTotalMoney(totalValue)
                  } 
                // console.log(res)
                // new = res.bar.value.ClosePrice
            })
        }, 10)
    
        return () => clearInterval(interval)
    }, [])


    return (
        <div className='main_container'>
            
            <div id='portfolio_container'>
                
                <h1 className='center'>Portfolio</h1>

                <div className='scroll_container'>
                
                    {toggleStocks && stockList.map((post) =>
                        <StockRow key={1} content={post}/>
                    )}

                </div>
            </div>

            <div id='totals_container'>
                
                <h1 className='center'>Total money</h1>
                <h1 className='center'>{totalMoney}$</h1>
                
            </div>

        </div>
    );
}

export default Assets;