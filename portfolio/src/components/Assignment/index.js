// import React from 'react';
// const Assignment = () =>{
// return (
//     <p>Development Assignment 3</p>
// )
// };

// export default Assignment;
import React, { Component } from 'react';
class Assignment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
    }
    render () {
      return (
        <div>
            <p>Counter 1</p>
            <h6>Count: {this.state.counter}</h6>
            <button onClick={() => {
              this.setState({counter: this.state.counter + 5});
            }}>Click!</button>

             <button onClick={() => {
              this.setState({reset: this.state.counter = 0});
            }}>Reset!</button>
        </div>
      )
    }
  }
  export default Assignment;