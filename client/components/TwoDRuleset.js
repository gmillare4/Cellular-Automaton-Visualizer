import React from "react";
import { connect } from "react-redux";
import {
  createGrid,
  randomGrid,
  random3dGrid,
  create3dGrid,
} from "../helperFuncs";
import { conway } from "../rulesetAlgos/conway";
import {
  thunkGetGeneration,
  thunkInitGrid,
  thunkChangeCell,
} from "../store/reducer";
import { CellBox } from "./threeComponents/cell";

class twoDRuleset extends React.Component {
  constructor() {
    super();
    this.state = {
      running: false,
    };
    this.playHandler = this.playHandler.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.randomHandler = this.randomHandler.bind(this);
  }
  componentDidMount() {
    const randomTestGrid = random3dGrid(20, 20);
    this.props.thunkInitGrid(randomTestGrid);
  }
  runNewGen() {
    const timeout = window.setTimeout(() => this.runNewGen(), 100);
    if (this.state.running === false) {
      clearTimeout(timeout);
    } else {
      this.props.thunkGetGeneration(conway(this.props.grid[0]));
      timeout = window.setTimeout(() => this.runNewGen(), 100);
    }
  }
  playHandler() {
    this.setState({
      running: true,
    });
    this.runNewGen();
  }
  pauseHandler() {
    this.setState({
      running: false,
    });
  }
  clearHandler() {
    const cleared3DGrid = create3dGrid(20, 20);
    this.props.thunkInitGrid(cleared3DGrid);
  }
  randomHandler() {
    const randomTestGrid = random3dGrid(20, 20);
    this.props.thunkInitGrid(randomTestGrid);
  }
  clickHandler(i, j) {
    this.props.thunkChangeCell(i, j);
  }
  render() {
    const newestGen = this.props.grid[0];
    return (
      <div>
        <div>Hello World</div>
        <div className="grid-container">
          <div>
            <table className="grid">
              <tbody>
                {newestGen.map((row, i) => {
                  return (
                    <tr>
                      {row.map((cell, j) => {
                        if (cell === 1) {
                          return (
                            <td
                              className="cell cell-alive"
                              onMouseDown={() => this.clickHandler(i, j)}
                            ></td>
                          );
                        } else {
                          return (
                            <td
                              className="cell"
                              onMouseDown={() => this.clickHandler(i, j)}
                            ></td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="myButton" onClick={this.playHandler}>
              Play
            </button>
            <button className="myButton" onClick={this.pauseHandler}>
              Pause
            </button>
            <button className="myButton" onClick={this.clearHandler}>
              Clear
            </button>
            <button className="myButton" onClick={this.randomHandler}>
              Random
            </button>
          </div>
          <CellBox props={this.props.grid} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  grid: state.generation,
});

const mapDispatchToProps = (dispatch) => ({
  thunkGetGeneration: (currGen) => dispatch(thunkGetGeneration(currGen)),
  thunkInitGrid: (grid) => dispatch(thunkInitGrid(grid)),
  thunkChangeCell: (i, j) => dispatch(thunkChangeCell(i, j)),
});

export default connect(mapStateToProps, mapDispatchToProps)(twoDRuleset);
