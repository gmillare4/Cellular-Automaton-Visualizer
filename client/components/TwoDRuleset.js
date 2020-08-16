import React from "react";
import { connect } from "react-redux";
import { createGrid, randomGrid, random3dGrid } from "../helperFuncs";
import { conway } from "../rulesetAlgos/conway";
import { thunkGetGeneration } from "../store/reducer";
import { CellBox } from "./threeComponents/cell";

class twoDRuleset extends React.Component {
  constructor() {
    super();
    this.playHandler = this.playHandler.bind(this);
  }
  componentDidMount() {
    const randomTestGrid = randomGrid(20, 20);
    this.props.thunkGetGeneration(randomTestGrid);
  }
  runNewGen() {
    this.props.thunkGetGeneration(conway(this.props.state[0]));
    window.setTimeout(() => this.runNewGen(), 100);
  }
  playHandler() {
    this.runNewGen();
  }
  render() {
    const newestGen = this.props.state[0];
    console.log("random3dgrid", random3dGrid(20, 20));
    // const someTestGrid = randomGrid(10, 10);
    // console.table(someTestGrid);
    // console.table(conway(someTestGrid));
    return (
      <div>
        <div>Hello World</div>
        <table className="grid">
          <tbody>
            {newestGen.map((row) => {
              return (
                <tr>
                  {row.map((cell) => {
                    if (cell === 1) {
                      return <td className="cell cell-alive"></td>;
                    } else {
                      return <td className="cell"></td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={this.playHandler}>Play</button>
        <CellBox props={this.props.state} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.generation,
});

const mapDispatchToProps = (dispatch) => ({
  thunkGetGeneration: (currGen) => dispatch(thunkGetGeneration(currGen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(twoDRuleset);
