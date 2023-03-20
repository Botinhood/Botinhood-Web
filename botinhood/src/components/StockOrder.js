import React, {useState} from "react";

function StockOrder({name}, {p2}){
    return (
        <div>
            {name}
            <div>
            {p2}
            </div>
        </div>
    )
}

export default StockOrder;