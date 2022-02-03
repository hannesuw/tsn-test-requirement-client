import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares/logger";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
