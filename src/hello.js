import React, { Component } from 'react';
import Hello2 from "./hello2";

class Hello extends Component {
  constructor (props) {
    super(props);

    this.state = {
      number : 0
    }

    this.click = this.click.bind(this);
  }

  click (e) {
    let mod = e.currentTarget.innerHTML === '+' ? 1 : -1;
    this.setState(prev => ({number: prev.number + mod}));
  }

  render() {
    return (
      <div>
        <button onClick={this.click}>+</button>
        <button onClick={this.click}>-</button>
        <p>State.number = {this.state.number}</p>
        <Hello2 text={this.state.number}/>
      </div>
    );
  }
}

export default Hello;
