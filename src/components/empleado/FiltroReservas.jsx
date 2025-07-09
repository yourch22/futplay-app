// FiltroReservas.jsx
import React from "react";

const FiltroReservas = () => (
  <section className="seccion">
    <h2>🔍 Filtrar Reservas</h2>
    <form className="formulario">
      <label>Cancha:</label>
      <select>
        <option>Todas</option>
        <option>Cancha 1</option>
        <option>Cancha 2</option>
        <option>Cancha 3</option>
      </select>
      <label>Fecha:</label>
      <input type="date" />
      <label>Estado:</label>
      <select>
        <option>Todas</option>
        <option>Confirmada</option>
        <option>En espera</option>
        <option>Cancelada</option>
      </select>
      <button>Buscar</button>
    </form>
  </section>
);

export default FiltroReservas;
