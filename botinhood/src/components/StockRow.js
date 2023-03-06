import React from 'react'
import '../styles/Assets.css'


function StockRow (props){
    console.log(props.content.props.children)
    return(
        <div id='stock-container'>
            <p class='stock-text'>{props.content.props.children}</p>
            <p class='stock-text'>{props.content.qauntity}</p>
            <p class='stock-text'>{props.content.bought}</p>
        </div>
    )
}


export default StockRow