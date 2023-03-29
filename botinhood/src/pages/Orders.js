// Import React and necessary components
import React from 'react';
import '../styles/Orders.css';
import StockOrder from '../components/StockOrder';

// Function to fetch data from the backend API for Long trades
async function getLong(botType) {
  let res = await fetch("http://localhost:8000/api/v1/stock/getLong", {
    method: "GET",
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip,deflate,br'
    }
  })
  return await res.json();
}

// Function to fetch data from the backend API for Short trades
async function getShort(botType) {
  let res = await fetch("http://localhost:8000/api/v1/stock/getShort", {
    method: "GET",
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip,deflate,br'
    }
  })
  console.log('waiting for a respones');
  return await res.json();
}

// Function to fetch data from the backend API for Long and Short trades
// async function getStockData(botType) {
//   let res = await fetch("http://localhost:8000/api/v1/stock/getLongShort", {
//     method: "GET",
//     headers: {
//       'Cache-Control': 'no-cache',
//       'Accept': '*/*',
//       'Accept-Encoding': 'gzip,deflate,br'
//     }
//   })
//   console.log('waiting for response');
//   return await res.json();
// }

// Function to fetch data from the backend API for quantities of stocks
async function getQuantity() {
  let result = await fetch("http://localhost:8000/api/v1/stock/getQuantity", {
    method: "GET",
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip,deflate,br'
    }
  })
  console.log('waiting for response Quant');
  return await result.json();
}


// Functional component for the Orders page
function Orders() {
  // Initialize state variables for stock list and quantity list
  const [stockList, setStockList] = React.useState(null);
  // const [stockQuantity, setQuantityList] = React.useState(null);

  // Fetch Long and Short trades from the backend API when component mounts
  React.useEffect(() => {
    const stockListArray = [];

    // Fetch Long trades and push each element into an array
    getLong('LongShort').then((res) => {
      for (let i = 0; i < res.length; i++) {
        const element = res[i];
        stockListArray.push(<StockOrder name={element} />)
      }
      // Set the state of stockList with the array of Long trades
      setStockList(stockListArray)
    })

    // Fetch Short trades and push each element into the same array as Long trades
    getShort('LongShort').then((res) => {
      getQuantity().then((result) => {
        let quantitiesList = Object.entries(result);

        // Map through the list of quantities and create a new StockOrder for each item
        quantitiesList.map(function ([key, value]) {
          if (res.includes(key)) {
            stockListArray.push(<StockOrder name={key} quantity={value} />)    
          } else {
            stockListArray.push(<StockOrder name={key} quantity={'No quantity found'} />)
          }
          return null;
        })
            // Set the state of stockList with the array of Long and Short trades
            setStockList(stockListArray)
        })
        // Set the state of stockList with the array of Long and Short trades
        setStockList(stockListArray)
    })}, [])
// have activate only once 
    

    // Render the Orders page
    return(
        <div className='main_container'>
            <div className='order_container'>
                {stockList && stockList.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
        </div>
    )
}

// Export the Orders component
export default Orders;
