import logo from "./logo.svg";
import "./App.css";

const name = "Abhi";
function App() {
  return (
    // here we can return only one element at a time
    // con't return more than one but if we want to use that then follow this
    <>
      <h1>Hello {name + "Dadhaniya"} </h1>
      <div className="known"></div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
