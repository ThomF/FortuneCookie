import Axios from 'axios';
import { baseURL } from '../env';

export const api = Axios.create({
  baseURL,
  timeout: 10000,
});

// Set the CORS header to allow access from any domain
