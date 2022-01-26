import React, { useEffect, useState } from "react";

const View = () => {
  const [viewNum, setViewNum] = useState(0);
  useEffect(() => {
    console.log({ viewNum });
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
    if (viewNum < 0) {
      viewNum == 0;
    }
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
    </div>
  );
};

export default View;
