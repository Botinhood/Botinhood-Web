import React, {useEffect, useState} from 'react'
import '../styles/Assets.css'


function StockRow (props){
    const [backgroundColor, setBackgroundColor] = useState('#599B88')
    // console.log(props.content)
    // console.log(props.content.bar)
    useEffect(() => {
        if (props.content.bar.value.OpenPrice > props.content.bar.value.ClosePrice) 
        {
            setBackgroundColor('#EF5778')
            // console.log(backgroundColor)
        }
        else {
            setBackgroundColor('599B88#')
        }
    })


    return(
        <div style={{background:backgroundColor}} id='stock-container'>
            <p class='stock-text'>{props.content.name}</p>
            <p class='stock-text'>{props.content.bar.value.OpenPrice}</p>
            <p class='stock-text'>{props.content.bar.value.ClosePrice}</p>

        </div>
    )
}


export default StockRow