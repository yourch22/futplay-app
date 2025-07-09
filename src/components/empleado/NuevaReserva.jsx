import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // 👈 importa Swal
import { getCanchasActivas } from "../../services/canchaService";
import { getImplementos } from "../../services/implementoService";
import { getClientes } from "../../services/clienteService";
import { getFranjas } from "../../services/franjaService";
import { crearReserva } from "../../services/reservaService";
import { useAuth } from "../../context/AuthContext";

const NuevaReserva = () => {
  const { usuario } = useAuth();

  const [canchas, setCanchas] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [implementos, setImplementos] = useState([]);
  const [franjas, setFranjas] = useState([]);

  const [formData, setFormData] = useState({
    canchaId: "",
    fecha: "",
    hora: "",
    clienteId: "",
    franjaId: "",
    implementos: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [canchasData, implementosData, clientesData, franjasData] =
          await Promise.all([
            getCanchasActivas(),
            getImplementos(),
            getClientes(),
            getFranjas(),
          ]);
        setCanchas(canchasData);
        setImplementos(implementosData);
        setClientes(clientesData);
        setFranjas(franjasData);
      } catch (error) {
        console.error("❌ Error al cargar datos:", error);
        Swal.fire("Error", "No se pudieron cargar los datos", "error");
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const parsedValue = parseInt(value);
    setFormData((prev) => ({
      ...prev,
      implementos: checked
        ? [...prev.implementos, parsedValue]
        : prev.implementos.filter((id) => id !== parsedValue),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fechaHora = `${formData.fecha}T${formData.hora}:00`;

    const reservaPayload = {
      clienteId: parseInt(formData.clienteId),
      usuarioId: usuario?.id,
      fecha: fechaHora,
      canchasIds: [parseInt(formData.canchaId)],
      franjasIds: [parseInt(formData.franjaId)],
      implementosIds: formData.implementos,
    };

    try {
      await crearReserva(reservaPayload);
      Swal.fire("Éxito", "✅ Reserva registrada correctamente", "success");
      setFormData({
        canchaId: "",
        fecha: "",
        hora: "",
        clienteId: "",
        franjaId: "",
        implementos: [],
      });
    } catch (err) {
      console.error("❌ Error al crear reserva:", err);
      Swal.fire("Error", "❌ No se pudo registrar la reserva", "error");
    }
  };

  return (
    <section className="seccion">
      <h2>➕ Nueva Reserva</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <label>Cancha:</label>
        <select
          name="canchaId"
          value={formData.canchaId}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccionar</option>
          {canchas.map((cancha) => (
            <option key={cancha.id_cancha} value={cancha.id_cancha}>
              {cancha.nombre_cancha}
            </option>
          ))}
        </select>

        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleInputChange}
          required
        />

        <label>Hora:</label>
        <input
          type="time"
          name="hora"
          value={formData.hora}
          onChange={handleInputChange}
          required
        />

        <label>Franja horaria:</label>
        <select
          name="franjaId"
          value={formData.franjaId}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccionar</option>
          {franjas.map((franja) => (
            <option key={franja.id} value={franja.id}>
              {franja.descripcion} ({franja.horaInicio} - {franja.horaFin})
            </option>
          ))}
        </select>

        <label>Cliente:</label>
        <select
          name="clienteId"
          value={formData.clienteId}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccionar</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre} ({cliente.telefono})
            </option>
          ))}
        </select>

        <label>Implementos requeridos:</label>
        <div className="implementos-check">
          {implementos.map((impl) => (
            <label key={impl.id}>
              <input
                type="checkbox"
                value={impl.id}
                checked={formData.implementos.includes(impl.id)}
                onChange={handleCheckboxChange}
              />{" "}
              {impl.nombre}
            </label>
          ))}
        </div>

        <button type="submit">Confirmar Reserva</button>
      </form>
    </section>
  );
};

export default NuevaReserva;
