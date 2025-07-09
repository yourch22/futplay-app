import React from "react";

const ReportesSection = () => {
  return (
    <section>
      <h2>📄 Generar Reporte</h2>
      <form className="formulario">
        <label>Fecha de Inicio:</label>
        <input type="date" />
        <label>Fecha Fin:</label>
        <input type="date" />
        <button>Generar Reporte</button>
      </form>
      <div className="info" style={{ marginTop: 10 }}>
        ℹ️ Reporte generado correctamente
      </div>
      <div className="lista">
        <h3>Estadísticas recientes</h3>
        <ul>
          <li>✔️ 180 reservas en abril</li>
          <li>✔️ Ingresos: S/ 5,400.00</li>
          <li>📄 <a href="#">Descargar PDF</a> | <a href="#">Descargar Excel</a></li>
        </ul>
      </div>
    </section>
  );
};

export default ReportesSection;
