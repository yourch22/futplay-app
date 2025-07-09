// AyudaEmpleado.jsx
import React from "react";

const AyudaEmpleado = () => (
  <section className="seccion">
    <h2>🆘 Ayuda y Soporte</h2>
    <form className="formulario">
      <label>¿Necesitas ayuda?</label>
      <textarea placeholder="Describe tu problema..." rows="4"></textarea>
      <button>Enviar mensaje</button>
    </form>
  </section>
);

export default AyudaEmpleado;
