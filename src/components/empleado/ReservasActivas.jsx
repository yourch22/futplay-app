import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ReservasActivas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/reservas/activas")
      .then((res) => setReservas(res.data))
      .catch((err) => console.error("Error al cargar reservas activas", err));
  }, []);

  const cancelarReserva = (idReserva) => {
    axios
      .put(`http://localhost:8080/api/reservas/${idReserva}/cancelar`)
      .then(() => {
        setReservas((prev) =>
          prev.map((r) =>
            r.idReserva === idReserva ? { ...r, estado: "CANCELADA" } : r
          )
        );
      })
      .catch((err) => console.error("Error al cancelar la reserva:", err));
  };

  const getBadgeClass = (estado) => {
    switch (estado) {
      case "CONFIRMADA":
        return "badge rounded-pill bg-success";
      case "ACTIVA":
        return "badge rounded-pill bg-primary";
      case "CANCELADA":
        return "badge rounded-pill bg-danger";
      default:
        return "badge rounded-pill bg-secondary";
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-dark mb-4">
        <i className="bi bi-calendar-check-fill text-primary me-2"></i>
        Reservas Activas
      </h2>

      {reservas.length === 0 ? (
        <div className="alert alert-info text-center">
          No hay reservas activas por el momento.
        </div>
      ) : (
        <div className="row g-4">
          {reservas.map((reserva) => (
            <div className="col-md-6 col-lg-4" key={reserva.idReserva}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-dark bg-light">
                  <h5 className="card-title fw-semibold mb-2">
                    🏟️ {reserva.canchas[0]?.nombre}
                  </h5>
                  <p className="mb-1">
                    <i className="bi bi-person-fill text-secondary me-1"></i>
                    <strong>Cliente:</strong> {reserva.clienteNombre}
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-calendar-event me-1 text-secondary"></i>
                    <strong>Fecha:</strong>{" "}
                    {new Date(reserva.fecha).toLocaleDateString()}
                  </p>
                  <p className="mb-2">
                    <i className="bi bi-clock me-1 text-secondary"></i>
                    <strong>Franja:</strong>{" "}
                    {reserva.franjas.map((f) => f.descripcion).join(", ")}
                  </p>
                  <span className={getBadgeClass(reserva.estado)}>
                    {reserva.estado}
                  </span>
                </div>
                {reserva.estado !== "CANCELADA" && (
                  <div className="card-footer bg-white border-0 text-end">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => cancelarReserva(reserva.idReserva)}
                    >
                      <i className="bi bi-x-circle me-1"></i>
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservasActivas;
