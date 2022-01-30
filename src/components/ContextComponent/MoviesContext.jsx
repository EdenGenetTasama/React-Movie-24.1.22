import React, { useState } from "react";

export const MovieContext = React.createContext();
export const arrayOfMovies = ["movieOne", "movieTwo", "MovieThree"];

 const MoviesContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState({});
  return (
      <MovieContext.Provider value={{firstName, setFirstName}}>
        {children}
      </MovieContext.Provider>

  );
};

export default MoviesContextProvider;