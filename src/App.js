import React, { Component } from "react";
import Todoapp from "./component/Todoapp";

import {BrowserRouter as Router,Route} from "react-router-dom";
import About from "./component/About/About";
import Header from "./component/Header/Header";


class App extends Component {
  render() {
    return (
      
      <Router>
        <Header />
        <Route  path="/" exact component={Todoapp}/>
        <Route  path="/about" component={About}/>
      </Router>
      
    );
  }
}
export default App;
