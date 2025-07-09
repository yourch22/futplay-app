import React from "react";

const EstadoReservaSection = () => {
  return (
    <section>
      <h2>📊 Estado de Reserva</h2>
      <div className="cards">
        <div className="card green"><h3>Confirmadas</h3><p>10</p></div>
        <div className="card orange"><h3>En Espera</h3><p>3</p></div>
        <div className="card red"><h3>Canceladas</h3><p>2</p></div>
      </div>
      <div className="lista" style={{ marginTop: 30 }}>
        <h3>Reservas Recientes</h3>
        <ul>
          <li>🟢 Cancha 1 - 5:00 PM - Juan Pérez <span className="estado-tag estado-confirmada">Confirmada</span></li>
          <li>🟡 Cancha 2 - 6:00 PM - Ana Torres <span className="estado-tag estado-espera">En espera</span></li>
          <li>🔴 Cancha 3 - 7:00 PM - Luis Vega <span className="estado-tag estado-cancelada">Cancelada</span></li>
        </ul>
      </div>
    </section>
  );
};

export default EstadoReservaSection;
