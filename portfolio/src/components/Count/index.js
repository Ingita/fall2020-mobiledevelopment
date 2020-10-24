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
            <p>Counter 2 </p>
            <h6>Count: {this.state.counter}</h6>
            <button onClick={() => {
              this.setState({counter: this.state.counter + 1});
            }}>Click!</button>
              <b></b>
             <button onClick={() => {
              this.setState({reset: this.state.counter = 0});
            }}>Reset!</button>
        </div>
      )
    }
  }
  export default Count;