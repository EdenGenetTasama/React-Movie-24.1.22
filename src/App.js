import logo from "./logo.svg";
import "./App.css";
import Home from "./components/homeComponent/home";
import {MoviesContextProvider} from "./components/ContextComponent/MoviesContext"
import AddMovie from "./components/InputComponent/addMovie";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MoviesContextProvider >
          <Home />
        <AddMovie/>
        </MoviesContextProvider>
      </header>
    </div>
  );
}

export default App;
