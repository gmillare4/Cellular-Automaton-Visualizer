import React from "react";
import { connect } from "react-redux";
import { createGrid } from "../helperFuncs";

const TestComponent = (props) => {
  console.table(createGrid(30, 30));
  return <div>Hello World</div>;
};

const mapStateToProps = (state) => ({
  state: state.testState,
});

export default connect(mapStateToProps)(TestComponent);
