import {
  QUERY_REQUEST,
  QUERY_SUCCESS,
  QUERY_FAIL,
  SELECT_HISTORICAL_IMAGE,
} from './query.actions';

const initialState = {
  isLoading: false,
  query: '',
  queryHistory: [],
  imageHistory: [],
  error: {},
  selectedImage: [],
};

export const queryReducer = (state = initialState, action) => {
  switch (action.type) {
  case QUERY_REQUEST:
    return {
      ...state,
      isLoading: true,
      query: action.payload,
      queryHistory: state.queryHistory.concat([action.payload]),
    };
  case QUERY_FAIL:
    return {
      ...state,
      isLoading: false,
    };
  case QUERY_SUCCESS:
    return {
      ...state,
      isLoading: false,
      selectedImage: action.payload,
      imageHistory: state.imageHistory.concat([action.payload]),
    };
  case SELECT_HISTORICAL_IMAGE:
    return {
      ...state,
      selectedImage: state.imageHistory[action.payload],
    };
  default:
    return state;
  }
};
