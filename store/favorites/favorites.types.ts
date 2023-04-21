import { UnsplashItem } from "../images/images.types";

export enum FAVORITES_ACTION_TYPES {
  ADD_FAVORITE = "@@FAVORITES/ADD_FAVORITE",
  REMOVE_FAVORITE = "@@FAVORITES/REMOVE_FAVORITE",
}

export interface FavoritesState {
  readonly data: UnsplashItem[];
}
