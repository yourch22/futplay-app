import React from "react";

const DashboardSection = () => {
  const fechaActual = new Date().toLocaleDateString("es-PE");

  return (
    <section>
      <header>
        <h1>Panel Avanzado</h1>
        <p>Vista general del sistema | <span>{fechaActual}</span></p>
      </header>
      <div className="cards">
        <div className="card blue">
          <h3>Ingresos Mensuales</h3>
          <p>S/ 3,240.00</p>
        </div>
        <div className="card orange">
          <h3>Ocupación Promedio</h3>
          <p>85%</p>
        </div>
        <div className="card green">
          <h3>Alertas Activas</h3>
          <p>2</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
