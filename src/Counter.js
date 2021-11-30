import React, { useState } from 'react'
import './Counter.css'
function Counter() {
    const [count, setCount] = useState(1);

    const sub=()=>{
        if(count>1){
            setCount(count/3)
        }
        else{
            setCount(1)
        }
    }
    return (
        <div className="counter">
            <div className="counter__container">
                <div className="counter__box">
                <button onClick={()=>{setCount(count*3)}}>+</button>
                <h1>{count}</h1>
                <button onClick={sub}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
