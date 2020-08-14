import React from "react";
import { connect } from "react-redux";
import { createGrid, randomGrid } from "../helperFuncs";
import { conway } from "../rulesetAlgos/conway";
import { thunkGetGeneration } from "../store/reducer";
import { CellBox } from "./threeComponents/cell";

class twoDRuleset extends React.Component {
  constructor() {
    super();
    this.playHandler = this.playHandler.bind(this);
  }
  componentDidMount() {
    const randomTestGrid = randomGrid(50, 50);
    this.props.thunkGetGeneration(randomTestGrid);
  }
  runNewGen() {
    this.props.thunkGetGeneration(conway(this.props.state));
    window.setTimeout(() => this.runNewGen(), 100);
  }
  playHandler() {
    // this.props.thunkGetGeneration(conway(this.props.state));
    this.runNewGen();
  }
  render() {
    // console.log(this.props.state);
    // const someTestGrid = randomGrid(10, 10);
    // console.table(someTestGrid);
    // console.table(conway(someTestGrid));
    return (
      <div>
        <div>Hello World</div>
        <table className="grid">
          <tbody>
            {this.props.state.map((row) => {
              return (
                <tr>
                  {row.map((cell) => {
                    if (cell === 1) {
                      return <td className="cell cell-alive"></td>;
                    } else {
                      return <td className="cell cell-dead"></td>;
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
