import { QUERY_REQUEST, QUERY_SUCCESS, QUERY_FAIL } from './query.actions';

const initialState = {
  isLoading: false,
  query: '',
  queryHistory: [],
  error: {},
  data: [],
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
      data: action.payload,
    };
  default:
    return state;
  }
};
