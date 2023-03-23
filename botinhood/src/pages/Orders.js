import React from 'react';
import '../styles/Orders.css';
import StockItem from '../components/StockItem';
import StockOrder from '../components/StockOrder';

async function getLong(botType){
    let res = await fetch("http://localhost:8000/api/v1/stock/getLong", {
        method: "GET",
        headers: {
            'Cache-Control': 'no-cache',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip,deflate,br'
        }    
    } )
    return await res.json();
}



    async function getShort(botType){
        let res = await fetch("http://localhost:8000/api/v1/stock/getShort", {
            method: "GET",
            headers: {
                'Cache-Control': 'no-cache',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip,deflate,br'
            }})
            console.log('waiting for a respones');
            return await res.json();
        }

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


function Orders(){
        // <div className="main_container">
        //    <div className='order_container'>
        //     <p>Test line</p>
        //    </div>
        // </div>
        // const myArray = ["item 1", "item 2", "item 3"];
        // const [open, setOpen] = React.useState(false);
        const [stockList, setStockList]=React.useState(null);
        // // getStockData("LongShort")
        
        React.useEffect(() =>{
            getLong('LongShort').then((res) => {
                
                const stockListArray = []
                
                for (let i = 0; i < res.length; i++) {
                    const element = res[i];
                    stockListArray.push(<StockOrder name={element}/>)
                }
                setStockList(stockListArray)
            })
        }, [])
    
            return(
        //         <div className='main_container'>
        //             <div className='select_bot'>
                    
        //             </div> 
                   
        //             <div className='stock_list_container'>
        //                 {stockList} 
        //             </div>         
        //         </div>
        //     );
        // The backend console displays the data you need send that over here. Create the html for where that data will
        // be displayed
        <div className='main_container'>
            <div className='order_container'>
      {stockList && stockList.map((item) => (
        <p key={item}>{item}</p>
      ))}
      </div>
    </div>)
        }

export default Orders;