import React, {useState} from "react";
import '../styles/StockOrder.css';

// function StockOrder({name}, {availability}, {timestamp}, {quantity}, {transaction}){
function StockOrder({name}, {quantity}){
    return (
        <div className="orders_container">
            <div >
                <h4>Open/Closed</h4>
                {/* <h4>{availability}</h4> */}
                {name}
            </div>
            <div className="info">
                <p>When order was filled</p>
                {/* <p>Filled: {timestamp}</p> */}
                {/* <p>{quantity}({quantity} | Market {transaction} Day)</p> */}

                 <p>{quantity}({quantity} | Market TEST Day)</p>
            </div>
        </div>
    )
}

export default StockOrder;