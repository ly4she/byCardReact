import React, { Component } from 'react';


import './Icons.css';
import 'material-components-web/dist/material-components-web.min.css';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}
