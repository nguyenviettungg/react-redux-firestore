import { connect } from "react-redux";

import React, { Component } from "react";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

export class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>TestComponent</h1>
        <h3>the answer is : {data}</h3>
        <Button onClick={incrementCounter} content="+" positive />
        <Button onClick={decrementCounter} content="-" negative />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.test.data,
});
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
