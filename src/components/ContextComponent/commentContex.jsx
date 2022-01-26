import React, { Children, createContext } from "react";

export const CommentContext = React.createContext();

 const comment = [
  {name: "Eden Tasama",text: "Love that Page!",numberView: 10},
  {name: "Daniel Tal",text: "Love that Book!",numberView: 20},
  {name: "Yafit Samuel",text: "Love that Party!",numberView: 30}
];

export const CommentContextProvider = (props) => {
  return (
      <CommentContext.Provider value={comment}>
        {props.children}
      </CommentContext.Provider>
  );
};


