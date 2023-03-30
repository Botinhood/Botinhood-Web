import React from "react";
import '../styles/StockOrder.css';

// function StockOrder({name}, {availability}, {timestamp}, {quantity}, {transaction}){
function StockOrder({name, quantity}){
    return (
        <div className="orders_container">
            <div >
                <h4>Closed</h4>
                {/* <h4>{availability}</h4> */}
                {name}
            </div>
            <div className="info">
                {/* <p>When order was filled</p> */}
                {/* <p>Filled: {timestamp}</p> */}
                {/* <p>{quantity}({quantity} | Market {transaction} Day)</p> */}

                 <p>Transaction of {quantity}</p>
            </div>
        </div>
    )
}

export default StockOrder;