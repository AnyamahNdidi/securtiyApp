import logo from './logo.svg';
import './App.css';
import Header from "../src/Component/Header/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ajsecure from "../src/Component/Ajsecure/Ajsecure"
import Home from './Home';

function App() {
  return (
    <div

      style={{ background: "#34384A", height: "5000px" }}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Ajsecure} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
// "#F4F9FA"