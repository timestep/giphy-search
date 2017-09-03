import axios from 'axios';

const API_KEY = 'api_key=d530c06de8b54b6c9762039bc3b4d6ff'

const apiQueryEndpoint = 'https://api.giphy.com/v1/stickers/';
const apiTrendingEndpoint = 'https://api.giphy.com/v1/gifs/trending/';

export const gifQuery = async query => {
  try {
    const { data } = await axios(`${apiQueryEndpoint}${API_KEY}search?&q=${query}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const trendingGifs = async () => {
  try {
    const { data } = await axios(`${apiTrendingEndpoint}${API_KEY}`);
    return data;
  } catch (error) {
    return error;
  }
};

