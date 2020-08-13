import React from "react";
import { connect } from "react-redux";
import { createGrid, randomGrid } from "../helperFuncs";
import { conway } from "../rulesetAlgos/conway";
import { thunkGetGeneration } from "../store/reducer";

class twoDRuleset extends React.Component {
  constructor() {
    super();
    this.playHandler = this.playHandler.bind(this);
  }
  componentDidMount() {
    const randomTestGrid = randomGrid(10, 10);
    this.props.thunkGetGeneration(randomTestGrid);
  }
  playHandler() {
    this.props.thunkGetGeneration(conway(this.props.state));
  }
  render() {
    console.log(this.props.state);
    // const someTestGrid = randomGrid(10, 10);
    // console.table(someTestGrid);
    // console.table(conway(someTestGrid));
    return (
      <div>
        <div>Hello World</div>
        <table>
          <tbody>
            {this.props.state.map((row) => {
              return (
                <tr>
                  {row.map((cell) => {
                    if (cell === 1) {
                      return <td>1</td>;
                    } else {
                      return <td>0</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={this.playHandler}>Play</button>
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
