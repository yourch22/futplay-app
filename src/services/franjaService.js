import axios from "axios";

export const getFranjas = async () => {
  const response = await axios.get("http://localhost:8080/api/franjas");
  return response.data;
};
