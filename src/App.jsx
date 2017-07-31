import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
