import React, { Component } from 'react';
import { Tank } from "./tanks/tank";
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="field">
        <div className="side left-side">
          <Tank tankId="left-tank"/>
        </div>
        <div className="side right-side">
          <Tank tankId="right-tank"/>
        </div>
      </div>
    );
  }
}

