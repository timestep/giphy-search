import { gifQuery, trendingGifs } from '../../common';

export const QUERY_REQUEST = 'QUERY_REQUEST';
export const QUERY_SUCCESS = 'QUERY_SUCCESS';
export const QUERY_FAIL = 'QUERY_FAIL';

export const trendingGifsAction = () => {
  return async () => {
    dispatch({
      type: TRENDING_REQUEST,
    });
    try {
      const data = await trendingGifs(query);
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

export const searchGifAction = query => {
  return async dispatch => {
    dispatch({
      type: QUERY_REQUEST,
      payload: query,
    });
    try {
      const data = await gifQuery(query);
      return dispatch({
        type: QUERY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: QUERY_FAIL,
        payload: error,
      });
    }
  };
};
