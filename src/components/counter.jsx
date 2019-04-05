import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // experimental below using arrow function vs constructor()

  componentDidUpdate(prevProps, prevState) {
    console.log("prevprops", prevState);
    console.log("prevprops", prevProps);
    // if (prevProps.counter.value !== this.props.counter.value){
    //ajax call and get new data from the server
    // }
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
    margin: 20,
    padding: 10
  };

  render() {
    console.log("counter rendered");
    return (
      <div>
        {/* <h4>Counter{this.props.id}</h4> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          + Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
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
    // We can use object destructoring so we dont have to use this.state each time
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
