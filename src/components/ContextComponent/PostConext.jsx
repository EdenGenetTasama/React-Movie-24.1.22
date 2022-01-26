import React from "react"


export const PostContext = React.createContext();

const postObj =[
    {postWritten: "Oshra" , text: "Lalalalalala" , likesNum : 100},
    {postWritten: "Shirly" , text: "blahblahblah" , likesNum : 200},
    {postWritten: "Selam" , text: "Nanananan" , likesNum : 300},
]

export const PostContextProvider=(props)=>{
    return(
        <PostContext.Provider value={postObj}>
            {props.children}
        </PostContext.Provider>
    )
}