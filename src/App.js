import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/index";
import About from "./pages/About";
import Home from "./pages/Home";
import Puppies from "./pages/Puppies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Puppies" component={Puppies}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
        <div className="App-header"></div>
      </div>
    </Router>
  );
}

export default App;
