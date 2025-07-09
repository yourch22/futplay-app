// src/services/authService.js
import axios from 'axios';

const API = 'http://localhost:8080/api/auth';

export const login = async (correo, contraseña) => {
  const res = await axios.post(`${API}/login`, { correo, contraseña });
  return res.data; // debe devolver el usuario con rol
};
