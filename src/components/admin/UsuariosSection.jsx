import React from "react";

const UsuariosSection = () => {
  return (
    <section>
      <h2>👥 Gestión de Empleados</h2>
      <input type="search" placeholder="Buscar empleado por nombre o correo" className="buscador" />
      <form className="formulario">
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo" />
        <button>Crear Empleado</button>
      </form>
      <div className="lista">
        <h3>Empleados activos</h3>
        <ul>
          <li>Carlos Ramírez <button>Eliminar</button></li>
          <li>Lucía Gómez <button>Eliminar</button></li>
        </ul>
      </div>
    </section>
  );
};

export default UsuariosSection;
