import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "../../components/event/eventReducer";
import testReducer from "../../components/testarea/testReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
});
export default rootReducer;
