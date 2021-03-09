import './Box.css'
import React, {useState, useEffect} from 'react';

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

function Box() {
    const [quote, setQuote] = useState('');
    const [color, setColor] = useState(''); 

    useEffect(() => {getQuote();}, [])
    function getQuote(){
        fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
         .then(res => res.json())
         .then(data =>{
             console.log(data);
             setQuote(data.message);
        getColor();
         })
    }

    function getColor(){
        setColor(colors[Math.floor(Math.random() * colors.length)]);
        document.getElementsByClassName('cnt-quote')[0].style.backgroundColor = color;
        document.getElementsByClassName('btn')[0].style.backgroundColor = color;
    }


    return(
        <div className='content'>
            <div className='cnt-quote' >
                <div className='cnt-text'>
                    <span id='text'>"{quote}</span>
                </div>
                <div className='cnt-author'>
                    <span id='author'>-DONALD TRUMP</span>
                </div>
                <button type='button' id='new-quote' className='btn' onClick={() => getQuote()}>One More</button>
                </div>
            </div>
        )
    
}

export default Box;