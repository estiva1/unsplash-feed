//import { action } from "typesafe-actions";
import { IMAGES_ACTION_TYPES, UnsplashItem } from "./images.types";

import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type FetchImagesStart = Action<IMAGES_ACTION_TYPES.FETCH_IMAGES_START>;

export type FetchImagesSuccess = ActionWithPayload<
  IMAGES_ACTION_TYPES.FETCH_IMAGES_SUCCESS,
  UnsplashItem[]
>;

export type FetchImagesFailed = ActionWithPayload<
  IMAGES_ACTION_TYPES.FETCH_IMAGES_FAILED,
  Error
>;

export const fetchImagesStart = withMatcher(
  (): FetchImagesStart => createAction(IMAGES_ACTION_TYPES.FETCH_IMAGES_START)
);

export const fetchImagesSuccess = withMatcher(
  (imagesArray: UnsplashItem[]): FetchImagesSuccess =>
    createAction(IMAGES_ACTION_TYPES.FETCH_IMAGES_SUCCESS, imagesArray)
);

export const fetchImagesFailed = withMatcher(
  (error: Error): FetchImagesFailed =>
    createAction(IMAGES_ACTION_TYPES.FETCH_IMAGES_FAILED, error)
);
