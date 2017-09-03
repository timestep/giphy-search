import { trendingGifs } from '../../common';

export const TRENDING_REQUEST = 'TRENDING_REQUEST';
export const TRENDING_SUCCESS = 'TRENDING_SUCCESS';
export const TRENDING_FAIL = 'TRENDING_FAIL';

export const trendingGifsAction = () => {
  return async dispatch => {
    dispatch({
      type: TRENDING_REQUEST,
    });
    try {
      const data = await trendingGifs();
      return dispatch({
        type: TRENDING_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: TRENDING_FAIL,
        payload: error,
      });
    }
  };
};
