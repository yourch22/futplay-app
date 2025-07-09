// src/services/canchaService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/canchas";

export const getCanchasActivas = async () => {
  const response = await axios.get(`${API_URL}/activas`);
  return response.data;
};
