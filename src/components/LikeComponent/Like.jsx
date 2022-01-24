import React, { useState } from "react";

const Like=()=>{
const [counter , setCounter] = useState(0);

const counterUp=()=>{
    setCounter(counter+1);

}
const counterDown=()=>{
    setCounter(counter-1);
}
const counterZero=()=>{
    setCounter(0);
}
    return(
        <div>
        <div>{counter}</div>
        <button type="button" onClick={counterUp}>Up</button>
        <button type="button" onClick={counterDown}>Down</button>
        <button type="button" onClick={counterZero}>Zero</button>
        </div>
    )
}

export default Like;