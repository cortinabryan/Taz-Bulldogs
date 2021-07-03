import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <Button>Test Button</Button>
        <h2 className="">Yoo</h2>
        <h3>LOL</h3>
      </div>
    </div>
  );
}

export default App;
