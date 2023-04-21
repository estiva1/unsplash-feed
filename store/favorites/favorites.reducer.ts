import { Reducer } from "redux";
import { FavoritesState, FAVORITES_ACTION_TYPES } from "./favorites.types";

export const initialState: FavoritesState = {
  data: [],
};

const favoritesReducer: Reducer<FavoritesState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FAVORITES_ACTION_TYPES.ADD_FAVORITE: {
      return { ...state, data: [...state.data, action.payload] };
    }
    case FAVORITES_ACTION_TYPES.REMOVE_FAVORITE: {
      return {
        ...state,
        data: state.data.filter((element) => element !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default favoritesReducer;
