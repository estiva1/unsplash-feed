import { all, call, fork, put, takeEvery } from "typed-redux-saga";
import { IMAGES_ACTION_TYPES } from "./images.types";
import { fetchImagesFailed, fetchImagesSuccess } from "./images.actions";
import { fetchImages } from "../../utils/api";

export function* fetchImagesAsync() {
  try {
    const imagesArray = yield* call(fetchImages);

    yield* put(fetchImagesSuccess(imagesArray));
  } catch (error) {
    yield* put(fetchImagesFailed(error as Error));
  }
}

export function* onFetchImages() {
  yield* takeEvery(IMAGES_ACTION_TYPES.FETCH_IMAGES_START, fetchImagesAsync);
}

export function* imagesSaga() {
  yield* all([fork(onFetchImages)]); //fork -> call ?
}
