import React, { Component } from 'react';
class Count extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
    }
    render () {
      return (
        <div>
            <p>Development Assignment 3 <b>| Inga Moiseienko</b></p>
            <p>Count: {this.state.counter}</p>
            <button onClick={() => {
              this.setState({counter: this.state.counter + 1});
            }}>Click!</button>

             <button onClick={() => {
              this.setState({reset: this.state.counter = 0});
            }}>Reset!</button>
        </div>
      )
    }
  }
  export default Count;