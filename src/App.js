import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AvailablePuppies from "./pages/AvailablePuppies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/available-puppies" component={AvailablePuppies} exact />
      </Switch>
    </Router>
  );
}

export default App;
