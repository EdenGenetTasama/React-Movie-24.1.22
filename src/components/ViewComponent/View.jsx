import React, { useContext, useEffect, useState } from "react";
import { CommentContext } from "../ContextComponent/commentContex";

const View = () => {
  const valuesFromContext = useContext(CommentContext);

  const [viewNum, setViewNum] = useState(0);

  useEffect(() => {
    // console.log({ viewNum });
  }, [viewNum]);

  const [user, setUser] = useState("");

  useEffect(() => {
    const userNamePrompt = prompt("Enter UserName:");
    setUser(userNamePrompt);
    alert(`Hello and welcome ${userNamePrompt}`);
  }, []);

  const UpViews = () => {
    setViewNum(viewNum + 1);
  };

  const DownViews = () => {
    setViewNum(viewNum - 1);
  };

  const ZeroViews = () => {
    setViewNum(0);
  };

  return (
    <div>
      <div>
        view: {viewNum} || userName: {user}
      </div>
      <button type="button" onClick={UpViews}>
        Up
      </button>
      <button type="button" onClick={DownViews}>
        Down
      </button>
      <button type="button" onClick={ZeroViews}>
        Zero
      </button>
      <div>
        {valuesFromContext.map((item) => (
          <p>
            {item.name}, {item.text} , {item.numberView}
          </p>
        ))}
      </div>
    </div>
  );
};

export default View;
