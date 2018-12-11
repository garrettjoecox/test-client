import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null
  }

  async refreshData() {
    const data = await fetch('https://api.garrettcox.io');
    const json = await data.json();

    this.setState({ data: JSON.stringify(json) });
  }

  componentDidMount() {
    this.refreshData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.data ? (
            <code>{this.state.data}</code>
          ) : (
            <h3>Loading...</h3>
          )}
        </header>
      </div>
    );
  }
}

export default App;
