import React, {useState} from "react";
import deleteImg from '../assets/delete.png';


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

async function deleteStock(stockName){
    console.log(stockName)
    let stockData = await getStockData("LongShort");
    const arrayWithoutStock = stockData.filter(function (name) {
        return name !== stockName;
    });

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
            "stocks": arrayWithoutStock
        })
    })
    window.location.reload(true);
}

function StockItem({name}){
    const [style, setStyle] = useState({display: 'none'});

    return(
        <div className='stock_item' 
            onMouseEnter={e => {
                setStyle({display: 'block'});
            }}
            onMouseLeave={e => {
                setStyle({display: 'none'})
            }}
        >
            {name}
            <button onClick={()=>deleteStock(name)} className="delete-btn" style={style}>
                <img src={deleteImg} alt='delete'></img>
            </button>
        </div>
    )
}

export default StockItem;