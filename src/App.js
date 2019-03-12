import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Test from './containers/Test';
import Info from './containers/Info';
import About from './containers/About';
import Develop from './containers/Develop';
import Navigation from './components/Navigation';

class App extends Component {
  state = {
    isComplitedAllTests: JSON.parse(localStorage.getItem('isComplitedAllTests')) || false
  };

  componentDidMount() {
    var elem = document.getElementById('loading');
    elem.style.display = 'none';
  }

  handleComplitedAllTests = state => {
    this.setState({ isComplitedAllTests: state });
    localStorage.setItem('isComplitedAllTests', state);
  };

  render() {
    return (
      <Router>
        <div className="wrapper__app">
          <div className="app__content">
            <Route exact path="/" component={Home} />
            <Route
              path="/test"
              component={() => <Test handleComplitedAllTests={this.handleComplitedAllTests} />}
            />
            <Route
              path="/info"
              component={() => <Info isComplitedAllTests={this.state.isComplitedAllTests} />}
            />
            <Route path="/about" component={About} />
            <Route path="/develop" component={Develop} />
          </div>

          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App;
