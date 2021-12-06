import "./App.css";
import Navbar from "./components/Navbar";
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="Text Utils" button="Developer" />
    <Textform heading="Enter the text to analyze..."/>
    </>
  );
}

export default App;
