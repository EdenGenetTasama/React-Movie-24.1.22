import React from "react";

export const MovieContext = React.createContext();
export const arrayOfMovies = ["movieOne" , "movieTwo", "MovieThree"];


export const MoviesContextProvider=(props)=>{

    return(
        <div>
        <MovieContext.Provider value={arrayOfMovies}>
            {props.children}
        </MovieContext.Provider>
        </div>
    )
}

