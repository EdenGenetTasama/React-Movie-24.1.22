import React, { useContext } from "react";
import {MovieContext} from "../ContextComponent/MoviesContext";

const NewMassage=()=>{
const valueContext =  useContext(MovieContext);
// console.log(valueContext.firstName);
const InputWords =(e)=>{
    valueContext.firstName = {name: e.target.value};
    console.log(valueContext.firstName)
}
const UpdateState=()=>{
    valueContext.setFirstName(valueContext.firstName)
}

return(
<div>
<h1>{valueContext.firstName.name}</h1>
<input type="text" onChange={InputWords} />
<button type="button" onClick={UpdateState}>Update</button>
</div>
)

}

export default NewMassage;