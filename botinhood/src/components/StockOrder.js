import React, {useState} from "react";
import '../styles/StockOrder.css';
function StockOrder({name}){
    return (
        <div className="order_container1">
            <div >
            <h4>Open/closed</h4>
            {name}
            </div>
            <div className="info">
            <p>Info goes here: When order was filled</p>
            </div>
        </div>
    )
}

export default StockOrder;