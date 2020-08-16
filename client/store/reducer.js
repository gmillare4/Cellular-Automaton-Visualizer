const GET_GEN = "GET_GEN";
const INIT_3D_GRID = "INIT_3D_GRID";

const getGen = (generation) => ({
  type: GET_GEN,
  generation,
});

const init3DGrid = (grid) => ({
  type: INIT_3D_GRID,
  grid,
});

export const thunkGetGeneration = (currGen) => (dispatch) => {
  dispatch(getGen(currGen));
};

export const thunkInitGrid = (grid) => (dispatch) => {
  dispatch(init3DGrid(grid));
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
    default:
      return state;
  }
}
