import React, { Component } from 'react';

import Header from 'common/Header';
import Main from 'common/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
