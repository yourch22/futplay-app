// src/components/empleado/SidebarEmpleado.jsx
import React from "react";

const SidebarEmpleado = ({ onSelectSection }) => {
  return (
    <nav className="sidebar">
      <h2>Empleado</h2>
      <ul>
        <li><a href="#" onClick={() => onSelectSection("dashboard")}>🏠 Dashboard</a></li>
        <li className="submenu">
          <a href="#">📅 Reservas ▾</a>
          <ul className="sub-list">
            <li><a href="#" onClick={() => onSelectSection("nueva-reserva")}>➕ Nueva Reserva</a></li>
            <li><a href="#" onClick={() => onSelectSection("filtro-reservas")}>🔍 Filtrar</a></li>
            <li><a href="#" onClick={() => onSelectSection("reservas-activas")}>📋 Activas</a></li>
          </ul>
        </li>
        <li><a href="#" onClick={() => onSelectSection("estado-reserva")}>📊 Estado de Reserva</a></li>
        <li><a href="#" onClick={() => onSelectSection("implementos")}>🎽 Implementos</a></li>
        <li><a href="#" onClick={() => onSelectSection("perfil")}>👤 Perfil</a></li>
        <li><a href="#" onClick={() => onSelectSection("ayuda")}>🆘 Ayuda</a></li>
        <li><a href="/login" className="cerrar-sesion">🔓 Cerrar Sesión</a></li>
      </ul>
    </nav>
  );
};

export default SidebarEmpleado;
