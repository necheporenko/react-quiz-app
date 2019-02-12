import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Test from "./containers/Test";
import Info from "./containers/Info";
import About from "./containers/About";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper__app">
          <div className="app__content">
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/info" component={Info} />
            <Route path="/about" component={About} />
          </div>

          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App;
