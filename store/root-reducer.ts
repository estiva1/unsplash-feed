import { combineReducers } from "redux";

import { ImageState } from "./images/images.types";
import { FavoritesState } from "./favorites/favorites.types";

import { imagesReducer } from "./images/images.reducer";
import { favoritesReducer } from "./favorites/favorites.reducer";

export interface ApplicationState {
  images: ImageState;
  favorites: FavoritesState;
}

export const rootReducer = combineReducers({
  images: imagesReducer,
  favorites: favoritesReducer,
});
