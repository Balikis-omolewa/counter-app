import React, { Component } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import Greeting from './Greeting';


// Define an interface for the props
interface CounterProps {
  countLimit?: number; // Optional prop for count limit
}

// Define an interface for the component state
interface CounterState {
  count: number; 
  successMessage: string;
  isLimitActive: boolean; // New state to manage the active limit
}

// Extend the Component class with props and state types
class Counter extends Component<CounterProps, CounterState> {

  // Initialize state
  state: CounterState = {
    count: 0,
    successMessage: "",
    isLimitActive: !!this.props.countLimit // Set to true if countLimit is provided
  };

  // Increment method
  increment = () => {
    this.setState(prevState => {
      if (this.state.isLimitActive) {
        const newCount = Math.min(prevState.count + 1, this.props.countLimit ?? Infinity);
        if (newCount === this.props.countLimit) {
          return { count: newCount, successMessage: "Success! You've reached the count limit." };
        }
        return { count: newCount, successMessage: "" };
      } else {
        return { count: prevState.count + 1, successMessage: "" };
      }
    });
  };

  // Decrement method
  decrement = () => {
    this.setState(prevState => ({ count: Math.max(prevState.count - 1, 0), successMessage: "" }));
  };

  // Reset method
  reset = () => {
    this.setState({ count: 0, successMessage: "", isLimitActive: false }); // Reset count and disable the limit
  };

  render() {
    return (
      <div className='counter'>
       <span style={{display: "flex", justifyContent: "center", textAlign: "center"}}><Greeting name={'there'} /> &nbsp;start counting.</span> 
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.decrement}><FaMinus /></button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.reset}><HiOutlineRefresh /></button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.increment}><FaPlus /></button>
        </div>
        {this.state.successMessage && <p>{this.state.successMessage}</p>}
      </div>
    );
  }
}

export default Counter;
