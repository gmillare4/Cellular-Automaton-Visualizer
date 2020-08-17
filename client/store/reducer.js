const GET_GEN = "GET_GEN";
const INIT_3D_GRID = "INIT_3D_GRID";
const CHANGE_CELL = "CHANGE_CELL";

const getGen = (generation) => ({
  type: GET_GEN,
  generation,
});

const init3DGrid = (grid) => ({
  type: INIT_3D_GRID,
  grid,
});

const changeCell = (i, j) => ({
  type: CHANGE_CELL,
  i: i,
  j: j,
});

export const thunkGetGeneration = (currGen) => (dispatch) => {
  dispatch(getGen(currGen));
};

export const thunkInitGrid = (grid) => (dispatch) => {
  dispatch(init3DGrid(grid));
};

export const thunkChangeCell = (i, j) => (dispatch) => {
  dispatch(changeCell(i, j));
};

const initialState = {
  generation: [[]],
};
export default function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GEN:
      if (state.generation.length === 20) {
        return {
          ...state,
          generation: [
            action.generation,
            ...state.generation.slice(0, state.generation.length - 1),
          ],
        };
      } else {
        return {
          ...state,
          generation: [action.generation, ...state.generation],
        };
      }
    case INIT_3D_GRID:
      return { ...state, generation: action.grid };
    case CHANGE_CELL:
      // let newCube = state.generation;
      // if (state.generation[0][action.i][action.j] === 1) {
      //   newCube[0][action.i][action.j] = 0;
      // } else {
      //   newCube[0][action.i][action.j] = 1;
      // }
      // return { ...state, generation: newCube };
      let val = 0;
      if (state.generation[0][action.i][action.j] === 0) {
        val = 1;
      }
      return {
        ...state,
        generation: state.generation.map((depth, z) => {
          return depth.map((height, i) => {
            return height.map((cell, j) => {
              if (z === 0 && i === action.i && j === action.j) {
                return val;
              }
              return cell;
            });
          });
        }),
      };
    default:
      return state;
  }
}
