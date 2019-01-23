import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Test from "./containers/Test";
import Info from "./containers/Info";
import About from "./containers/About";
import logo from "./logo.svg";
import "./App.css";
// import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/info" component={Info} />
          <Route path="/about" component={About} />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
