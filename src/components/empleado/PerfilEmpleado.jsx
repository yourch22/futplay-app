// PerfilEmpleado.jsx
import React from "react";

const PerfilEmpleado = () => (
  <section className="seccion">
    <h2>👤 Perfil de Usuario</h2>
    <form className="formulario">
      <label>Nombre:</label>
      <input type="text" value="Empleado Principal" />
      <label>Correo electrónico:</label>
      <input type="email" value="empleado@ballfix.com" />
      <label>Contraseña nueva:</label>
      <input type="password" placeholder="********" />
      <button>Actualizar Perfil</button>
    </form>
  </section>
);

export default PerfilEmpleado;