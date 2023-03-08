import React from 'react';
import '../styles/Orders.css';

async function getShort(botType){
    let res = await fetch("http://localhost:8000/api/v1/stock/getLong", {
        method: "GET",
        headers: {
            'Cache-Control': 'no-cache',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip,deflate,br'
        }
    })}

    async function getLong(botType){
        let res = await fetch("http://localhost:8000/api/v1/stock/getShort", {
            method: "GET",
            headers: {
                'Cache-Control': 'no-cache',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip,deflate,br'
            }
        })}

function Orders(){
    return (
        <div className="main_container">
           <div className='order_container'>
            <p>Test line</p>
           </div>
        </div>
    );
}

export default Orders;