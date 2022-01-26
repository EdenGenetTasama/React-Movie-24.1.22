import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/homeComponent/home";
import { MoviesContextProvider } from "./components/ContextComponent/MoviesContext";
import AddMovie from "./components/InputComponent/addMovie";
import View from "./components/ViewComponent/View";
import Comments from "./components/CommentsComponent/Comments";
import Post from "./components/PostComponent/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MoviesContextProvider>
          <Home />
          <AddMovie />
        </MoviesContextProvider>
        <Comments />
        <Post />
      </header>
    </div>
  );
}

export default App;
