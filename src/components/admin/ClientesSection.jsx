import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

const ClientesSection = () => {
  const [clientes, setClientes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [clienteActual, setClienteActual] = useState({ id: null, nombre: "", telefono: "" });

  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = () => {
    axios
      .get("http://localhost:8080/api/clientes")
      .then((res) => setClientes(res.data))
      .catch(() => Swal.fire("Error", "No se pudo cargar clientes", "error"));
  };

  const abrirModal = (cliente = { id: null, nombre: "", telefono: "" }) => {
    setClienteActual(cliente);
    setModoEdicion(!!cliente.id);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setClienteActual({ id: null, nombre: "", telefono: "" });
    setModoEdicion(false);
  };

  const guardarCliente = () => {
    if (!clienteActual.nombre || !clienteActual.telefono) {
      return Swal.fire("Campos incompletos", "Completa todos los campos", "warning");
    }

    const metodo = modoEdicion ? axios.put : axios.post;
    const url = modoEdicion
      ? `http://localhost:8080/api/clientes/${clienteActual.id}`
      : "http://localhost:8080/api/clientes";

    metodo(url, clienteActual)
      .then(() => {
        Swal.fire("Éxito", `Cliente ${modoEdicion ? "actualizado" : "registrado"}`, "success");
        cargarClientes();
        cerrarModal();
      })
      .catch(() => Swal.fire("Error", "No se pudo guardar el cliente", "error"));
  };

  const eliminarCliente = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/api/clientes/${id}`)
          .then(() => {
            Swal.fire("Eliminado", "Cliente eliminado correctamente", "success");
            cargarClientes();
          })
          .catch(() => Swal.fire("Error", "No se pudo eliminar el cliente", "error"));
      }
    });
  };

  return (
    <section className="container mt-4">
      <h2 className="mb-4">👤 Gestión de Clientes</h2>

      <Button variant="primary" onClick={() => abrirModal()}>➕ Nuevo Cliente</Button>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.telefono}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => abrirModal(cliente)}
                  className="me-2"
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarCliente(cliente.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modoEdicion ? "Editar Cliente" : "Registrar Cliente"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                value={clienteActual.nombre}
                onChange={(e) => setClienteActual({ ...clienteActual, nombre: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                value={clienteActual.telefono}
                onChange={(e) => setClienteActual({ ...clienteActual, telefono: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={guardarCliente}>
            {modoEdicion ? "Actualizar" : "Registrar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ClientesSection;
