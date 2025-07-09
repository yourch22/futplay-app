import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ImplementosEmpleado = () => {
  const [implementos, setImplementos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/implementos")
      .then((res) => setImplementos(res.data))
      .catch((err) =>
        console.error("Error al cargar implementos:", err)
      );
  }, []);

  return (
    <section className="container mt-4">
      <h2 className="mb-4">🎽 Gestión de Implementos</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Item</th>
            <th>Precio (S/)</th>
            <th>Disponible</th>
            <th>Prestado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {implementos.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{Math.floor(Math.random() * 10 + 1)}</td>
              <td>{Math.floor(Math.random() * 3)}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary">Devolver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {implementos.length === 0 && (
        <div className="alert alert-warning">No hay implementos registrados.</div>
      )}
    </section>
  );
};

export default ImplementosEmpleado;
