import React, { Component } from "react";

class StateLess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "25",
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <p>{this.props.value}</p>
      </div>
    );
  }
}
export default StateLess;
// stateless === with no state
