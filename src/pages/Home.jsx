import React from "react";

import "./Home.css";

function Home() {
  return (
    <div>
      {/* HERO */}
      <header className="hero text-center text-white d-flex flex-column justify-content-center align-items-center">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">
            Bienvenido a <span style={{ color: "#ffe600" }}>BALLFIX</span>
          </h1>
          <p className="lead mb-4">
            Gestiona tu cancha de forma inteligente, rápida y eficiente.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/login" className="btn btn-light fw-bold px-4 py-2 shadow">
              Iniciar como Administrador
            </a>
            <a href="/login" className="btn fw-bold px-4 py-2" style={{ backgroundColor: "#ffe600", color: "#000" }}>
              Iniciar como Empleado
            </a>
          </div>
        </div>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="py-5 bg-white text-center text-dark">
        <div className="container">
          <h2 className="text-primary mb-3">⚽ Servicios de CANCHITA</h2>
          <p className="mx-auto" style={{ maxWidth: "600px" }}>
            Reserva rápida, gestión de implementos y control total de tus canchas
            en tiempo real. Todo desde una sola plataforma amigable.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-5 bg-light text-center text-dark">
        <div className="container">
          <h2 className="text-primary mb-3">📞 ¿Necesitas ayuda?</h2>
          <p>
            Escríbenos a:{" "}
            <a href="mailto:soporte@ballfix.com" className="fw-bold text-primary text-decoration-none">
              soporte@ballfix.com
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-center text-light py-3">
        <p className="mb-0">© 2025 BALLFIX - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Home;
