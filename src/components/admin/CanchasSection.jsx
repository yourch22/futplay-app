import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CanchasSection = () => {
  const [canchas, setCanchas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/canchas/activas")
      .then((res) => setCanchas(res.data))
      .catch((err) => console.error("Error al obtener canchas activas", err));
  }, []);

  return (
    <section className="container mt-4">
      <h2 className="mb-4">
        🏟️ Gestión de Canchas
      </h2>
      <div className="row">
        {canchas.map((cancha) => (
          <div className="col-md-4 mb-4" key={cancha.id_cancha}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{cancha.nombre_cancha}</h5>
                <p className="text-muted">
                  Tipo: {cancha.tipoCancha.nombre_tipo} <br />
                  <small>{cancha.tipoCancha.descripcion_tipo}</small>
                </p>
                <p className="text-muted mb-2">
                  Estado:{" "}
                  <span className="badge bg-success">Disponible</span>
                </p>

                <div className="mb-2">
                  <label className="form-label text-muted">Tarifa (S/):</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={50}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted">Horario:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="8:00 AM - 10:00 PM"
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-success btn-sm">
                    Habilitar
                  </button>
                  <button className="btn btn-outline-danger btn-sm">
                    Inhabilitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {canchas.length > 0 && (
        <div className="alert alert-success mt-3">
          ✔️ Información de canchas actualizada
        </div>
      )}
    </section>
  );
};

export default CanchasSection;
