import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import rootReducer from "../redux/reducers/rootReducer";

export const store = createStore(rootReducer, devToolsEnhancer());
