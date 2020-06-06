import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';
import Home from './components/Home';
import Select from './components/Select';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      xSelected: false
    }
  }

  xSeletctedFunc = (xSelected) => {
    console.log(xSelected)
    this.setState({
      xSelected: xSelected
    })
  }
  render() {
    console.log(this.state.xSelected);

    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact render={(props) => { return (<Home {...props} />) }} />
          <Route path="/Select" render={(props) => { return (<Select option_data={(xSelected) => { this.xSeletctedFunc(xSelected) }} {...props} />) }} />
          <Route path="/Game" render={(props) => { return (<Game xSelected={this.state.xSelected} {...props} />) }} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
