import React from "react";

const SidebarAdmin = ({ onSelectSection }) => {
  return (
    <nav className="sidebar">
      <h2>Administrador</h2>
      <ul>
        <li><a href="#dashboard" onClick={() => onSelectSection("dashboard")}>📊 Dashboard</a></li>
        <li><a href="#usuarios" onClick={() => onSelectSection("usuarios")}>👥 Usuarios</a></li>
        <li><a href="#cancha" onClick={() => onSelectSection("cancha")}>🏟️ Canchas</a></li>
        <li><a href="#inventario" onClick={() => onSelectSection("inventario")}>📦 Inventario</a></li>
        <li><a href="#clientes" onClick={() => onSelectSection("clientes")}>👤 Clientes</a></li>

        <li className="submenu">
          <a>📈 Reportes ▾</a>
          <ul className="sub-list">
            <li><a href="#reportes" onClick={() => onSelectSection("reportes")}>📄 Generar Reporte</a></li>
            <li><a href="#estado-reserva" onClick={() => onSelectSection("estado-reserva")}>📊 Estado de Reserva</a></li>
          </ul>
        </li>

        <li><a href="/login" className="cerrar-sesion">🔓 Cerrar Sesión</a></li>
      </ul>
    </nav>
  );
};

export default SidebarAdmin;
