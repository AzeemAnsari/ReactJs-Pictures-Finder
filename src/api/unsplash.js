import axios from 'axios';

const auth = process.env.REACT_APP_AUTH;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: auth,
  },
});
