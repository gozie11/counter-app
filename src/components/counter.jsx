import React, { Component } from "react";

class Counter extends Component {
  // constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  componentDidUpdate(prevProps, PrevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", PrevState);
  }

  //This funky lookin "arrow notation is how component objects are bound to be able to reference the this keyword. P.s. might not work in the future."

  render() {
    return (
      //this span content is super funky to me. I need to lear about arrow functions I guess.
      //Basically though if you want to pass in a referenced function with a parameter,
      // you reference an unnamed arrow function that points to the fucntion you need.
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
