// src/services/implementoService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/implementos";

export const getImplementos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
