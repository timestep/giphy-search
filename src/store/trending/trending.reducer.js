import { TRENDING_REQUEST, TRENDING_SUCCESS, TRENDING_FAIL } from './trending.actions';

const initialState = {
  isLoading: false,
  error: {},
  data: [],
};

export const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
  case TRENDING_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case TRENDING_FAIL:
    return {
      ...state,
      isLoading: false,
    };
  case TRENDING_SUCCESS:
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    };
  default:
    return state;
  }
};
