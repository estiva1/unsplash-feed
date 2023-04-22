import {
  Store,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "@redux-devtools/extension";
import { rootSaga } from "./root-saga";

import { ApplicationState, rootReducer } from "./root-reducer";

export default function configureStore(
  initialState: ApplicationState | any
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
