import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"
import DeliveriesList from "./components/deliveries";
import EditDelivery from "./components/editDelivery";
import CreateDeliveryLog from "./components/createDeliveryLog";
import CreateRobot from "./components/createRobot";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={DeliveriesList} />
      <Route path="/edit/:id" component={EditDelivery} />
      <Route path="/create" component={CreateDeliveryLog} />
      <Route path="/robot" component={CreateRobot} />
      </div>
    </Router>
  );
}

export default App;
