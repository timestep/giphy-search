import axios from 'axios';

const apiQueryEndpoint =
  'https://api.giphy.com/v1/stickers/search?api_key=d530c06de8b54b6c9762039bc3b4d6ff&q=';

export const gifQuery = async query => {
  try {
    const { data } = await axios(`${apiQueryEndpoint}${query}`);
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
