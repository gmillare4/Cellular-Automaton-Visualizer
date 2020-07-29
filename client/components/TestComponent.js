import React from "react";
import { connect } from "react-redux";

const TestComponent = (props) => {
  console.log(props);
  return <div>Hello World</div>;
};

const mapStateToProps = (state) => ({
  state: state.testState,
});

export default connect(mapStateToProps)(TestComponent);
