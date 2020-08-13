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
      return { ...state, generation: action.generation };
    default:
      return state;
  }
}
