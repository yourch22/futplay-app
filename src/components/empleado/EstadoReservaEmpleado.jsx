// EstadoReservaEmpleado.jsx
import React from "react";

const EstadoReservaEmpleado = () => (
  <section className="seccion">
    <h2>📊 Estado de Reservas - Historial Semanal</h2>
    <div className="cards">
      <div className="card green">
        <h3>Confirmadas</h3>
        <p>8</p>
        <span>Últimos 7 días</span>
      </div>
      <div className="card orange">
        <h3>En Espera</h3>
        <p>3</p>
        <span>Últimos 7 días</span>
      </div>
      <div className="card red">
        <h3>Canceladas</h3>
        <p>2</p>
        <span>Últimos 7 días</span>
      </div>
    </div>
  </section>
);

export default EstadoReservaEmpleado;