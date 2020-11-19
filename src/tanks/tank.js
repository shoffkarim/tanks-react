import React, { Component } from 'react';

export class Tank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 100,
      left: 60,
    }
  }

  dataTank = {
    id: this.props.tankId,
  }

  changePosition(event) {
    switch (event.code) {
      case "KeyW":
        this.setState((state) => {
          return {top: state.top + 1};
        });
        break;

      default:
        break;
    }
    // let rightTank = document.querySelector(".right-tank input");
    // rightTank.focus();
  }

  render() {
    // let tankPosition = {
    //   top: this.state.topP + "px",
    //   left: this.state.leftP + "px",
    // }
    return (
      <div className={ this.dataTank.id + " tank"} style={this.state}>
        <img className="tank-img" src="tank.png" alt="tank"></img>
        <p></p>
        <input onKeyDown={() => this.setState({ top: this.state.top + 1 })}></input>
      </div>

    );
  }
}
