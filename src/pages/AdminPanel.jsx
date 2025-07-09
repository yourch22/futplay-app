import React, { useState, useEffect } from "react";
import SidebarAdmin from "../components/admin/SidebarAdmin";
import "../styles/AdminPanel.css";

// Importa cada sección (en breve te los doy)
import DashboardSection from "../components/admin/DashboardSection";
import UsuariosSection from "../components/admin/UsuariosSection";
import CanchasSection from "../components/admin/CanchasSection";
import InventarioSection from "../components/admin/InventarioSection";
import ClientesSection from "../components/admin/ClientesSection";
import ReportesSection from "../components/admin/ReportesSection";
import EstadoReservaSection from "../components/admin/EstadoReservaSection";

const AdminPanel = () => {
  const [seccionActual, setSeccionActual] = useState("dashboard");

  useEffect(() => {
    document.title = "Administrador | BALLFIX";
  }, []);

  return (
    <div className="admin-panel">
      <SidebarAdmin onSelectSection={setSeccionActual} />

      <main className="main-content">
        {seccionActual === "dashboard" && <DashboardSection />}
        {seccionActual === "usuarios" && <UsuariosSection />}
        {seccionActual === "cancha" && <CanchasSection />}
        {seccionActual === "inventario" && <InventarioSection />}
        {seccionActual === "clientes" && <ClientesSection />}
        {seccionActual === "reportes" && <ReportesSection />}
        {seccionActual === "estado-reserva" && <EstadoReservaSection />}
      </main>
    </div>
  );
};

export default AdminPanel;
