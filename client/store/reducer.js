const GET_GEN = "GET_GEN";

const getGen = (generation) => ({
  type: GET_GEN,
  generation,
});

export const thunkGetGeneration = (currGen) => (dispatch) => {
  dispatch(getGen(currGen));
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
    default:
      return state;
  }
}
