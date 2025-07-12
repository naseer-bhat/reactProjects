// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // change this to your backend URL if deployed
});

export default instance;
