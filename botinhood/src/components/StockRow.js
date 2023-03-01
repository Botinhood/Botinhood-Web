import React from 'react'
import '../styles/Assets.css'


function StockRow (props){
    return(
        <div id='stock-container'>
            <p class='stock-text'>{props.content.name}</p>
            <p class='stock-text'>{props.content.qauntity}</p>
            <p class='stock-text'>{props.content.bought}</p>
        </div>
    )
}


export default StockRow