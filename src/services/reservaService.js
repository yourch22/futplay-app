// src/services/reservaService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/reservas";

export const crearReserva = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};
