import React, { Component } from "react";
import Counter from "./counter";

// this is now a controlled component

class Counters extends Component {
  render() {
    console.log("counters rendered");
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          // these attributes are props
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // this is the same as the two above
          >
            {/* <h4>Counter #{counter.id}</h4> */}
            {/* h4 is a child prop */}
          </Counter>
        ))}
        <br />
      </div>
    );
  }
}

export default Counters;
