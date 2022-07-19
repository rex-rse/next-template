import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api';

export const requester = axios.create({
  baseURL: baseUrl,
  headers: {
    'content-type': 'aplication-json',
  },
});
