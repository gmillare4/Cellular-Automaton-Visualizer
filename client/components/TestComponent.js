import React from "react";
import { connect } from "react-redux";
import { createGrid, randomGrid } from "../helperFuncs";
import { conway } from "../rulesetAlgos/conway";

class TestComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const someTestGrid = randomGrid(10, 10);
    console.table(someTestGrid);
    console.table(conway(someTestGrid));
    return <div>Hello World</div>;
  }
}

const mapStateToProps = (state) => ({
  state: state.testState,
});

export default connect(mapStateToProps)(TestComponent);
