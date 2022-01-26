import React, { useContext } from "react";
import { PostContext } from "../ContextComponent/PostConext";

const Massage=()=>{
const contextValuePost = useContext(PostContext);
return(<div>
{contextValuePost.map((item)=>
    <p>{item.postWritten} , {item.text} , {item.likesNum}</p>
)}
</div>)
}

export default Massage