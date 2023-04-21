import { Reducer } from "redux";
import { ImageState, IMAGES_ACTION_TYPES, UnsplashItem } from "./images.types";

export const initialState: ImageState = {
  data: [],
  errors: undefined,
  loading: false,
};

const mergeArrays = (...arrays: any[]) => {
  let jointArray: any[] = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  const uniqueArray = jointArray.reduce((newArray, item) => {
    if (newArray.includes(item)) {
      return newArray;
    } else {
      return [...newArray, item];
    }
  }, []);

  return uniqueArray;
};

const reducer: Reducer<ImageState> = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_ACTION_TYPES.FETCH_IMAGES_START: {
      return { ...state, loading: true };
    }
    case IMAGES_ACTION_TYPES.FETCH_IMAGES_SUCCESS: {
      /**
       * merge arrays instead of nesting them like [[<images>], [<images>]]
       */
      let newState = mergeArrays(state.data, action.payload);

      return { ...state, loading: false, data: newState };
    }
    case IMAGES_ACTION_TYPES.FETCH_IMAGES_FAILED: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as imagesReducer };
