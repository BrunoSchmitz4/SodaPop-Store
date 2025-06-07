import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // ajuste se o backend estiver em outro lugar
});

export default api;
