import { all, call } from "typed-redux-saga";
import { imagesSaga } from "./images/images.sagas";

export function* rootSaga() {
  yield* all([call(imagesSaga)]);
}
