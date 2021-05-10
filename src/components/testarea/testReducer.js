import { createReducer } from "../../redux/common/utils/reducerUtils";
import { DECREMENT_COUNT, INCREMENT_COUNT } from "./testContants";

const initialState = {
  data: 42,
};

const incrementCounter = (state) => {
  return { ...state, data: state.data + 1 };
};
const decrementCounter = (state) => {
  return { ...state, data: state.data - 1 };
};

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNT:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNT:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };

export default createReducer(initialState, {
  [INCREMENT_COUNT]: incrementCounter,
  [DECREMENT_COUNT]: decrementCounter,
});
