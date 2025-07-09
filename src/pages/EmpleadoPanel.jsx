import React, { useState, useEffect } from "react";
import SidebarEmpleado from "../components/empleado/SidebarEmpleado";

import DashboardEmpleado from "../components/empleado/DashboardEmpleado";
import NuevaReserva from "../components/empleado/NuevaReserva";
import FiltroReservas from "../components/empleado/FiltroReservas";
import ReservasActivas from "../components/empleado/ReservasActivas";
import EstadoReservaEmpleado from "../components/empleado/EstadoReservaEmpleado";
import ImplementosEmpleado from "../components/empleado/ImplementosEmpleado";
import PerfilEmpleado from "../components/empleado/PerfilEmpleado";
import AyudaEmpleado from "../components/empleado/AyudaEmpleado";


import "../styles/EmpleadoPanel.css";

const EmpleadoPanel = () => {
  const [seccionActual, setSeccionActual] = useState("dashboard");

  useEffect(() => {
    document.title = "Empleado | BALLFIX";
  }, []);

  return (
    <div className="empleado-panel">
      <SidebarEmpleado onSelectSection={setSeccionActual} />

      <main className="main-content">
        {seccionActual === "dashboard" && <DashboardEmpleado />}
        {seccionActual === "nueva-reserva" && <NuevaReserva />}
        {seccionActual === "filtro-reservas" && <FiltroReservas />}
        {seccionActual === "reservas-activas" && <ReservasActivas />}
        {seccionActual === "estado-reserva" && <EstadoReservaEmpleado />}
        {seccionActual === "implementos" && <ImplementosEmpleado />}
        {seccionActual === "perfil" && <PerfilEmpleado />}
        {seccionActual === "ayuda" && <AyudaEmpleado />}
      </main>
    </div>
  );
};

export default EmpleadoPanel;
