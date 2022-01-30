import React from "react";
import NewMassage from "../massageComponent/NewMassage";
import MoviesContextProvider  from "../ContextComponent/MoviesContext";

const Test =()=>{
    return(
        <MoviesContextProvider>
            <NewMassage/>
        </MoviesContextProvider>
    )
}

export default Test;