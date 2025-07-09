// DashboardEmpleado.jsx
import React from "react";

const DashboardEmpleado = () => (
  <section className="seccion">
    <header>
      <h1>Panel del Empleado</h1>
      <p>Resumen del día | <span>{new Date().toLocaleDateString("es-PE")}</span></p>
    </header>
    <div className="cards">
      <div className="card blue">
        <h3>Reservas Hoy</h3>
        <p>12</p>
        <span>Detalles</span>
      </div>
      <div className="card orange">
        <h3>Estado de la Cancha</h3>
        <p>Disponible</p>
        <span>Ver disponibilidad</span>
      </div>
      <div className="card green">
        <h3>Reservas en Espera</h3>
        <p>4</p>
        <span>Revisar estado</span>
      </div>
    </div>
  </section>
);

export default DashboardEmpleado;