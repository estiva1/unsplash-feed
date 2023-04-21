import { UnsplashItem } from "../images/images.types";
import { FAVORITES_ACTION_TYPES } from "./favorites.types";

import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type AddFavorite = ActionWithPayload<
  FAVORITES_ACTION_TYPES.ADD_FAVORITE,
  UnsplashItem[]
>;

export type RemoveFavorite = ActionWithPayload<
  FAVORITES_ACTION_TYPES.REMOVE_FAVORITE,
  UnsplashItem[]
>;

export const addFavorite = withMatcher(
  (imagesArray: UnsplashItem[]): AddFavorite =>
    createAction(FAVORITES_ACTION_TYPES.ADD_FAVORITE, imagesArray)
);

export const removeFavorite = withMatcher(
  (imagesArray: UnsplashItem[]): RemoveFavorite =>
    createAction(FAVORITES_ACTION_TYPES.REMOVE_FAVORITE, imagesArray)
);
