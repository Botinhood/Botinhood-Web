import React, {useState} from 'react';
import '../styles/Assets.css';
import graph from '../assets/temp-graph.png'

import StockRow from '../components/StockRow';


const tempStockData = [
    {id:1, name: 'apple', bought: '10', qauntity: 11},
    {id:1, name: 'apple', bought: '10', qauntity: 11},
    {id:1, name: 'apple', bought: '10', qauntity: 11},
    {id:1, name: 'apple', bought: '10', qauntity: 11},
    {id:1, name: 'apple', bought: '10', qauntity: 11},
    {id:1, name: 'apple', bought: '10', qauntity: 11},
]

function Assets(){
    const [myStocks, setMyStocks] = useState(tempStockData)

    return (
        <div className='main_container'>
            
            <div id='portfolio_container'>
                
                <h1 class='center'>Your Portfolio</h1>

                <img id='graph' src={graph} alt="graph" />

                {myStocks.map((post) =>
                    <StockRow content={post}/>
                )}
                <div>
                    
                </div>

            </div>

        </div>
    );
}

export default Assets;