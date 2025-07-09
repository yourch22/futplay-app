import React from "react";

const InventarioSection = () => {
  return (
    <section>
      <h2>📦 Inventario Deportivo</h2>
      <table>
        <thead>
          <tr><th>Item</th><th>Stock</th><th>Acción</th></tr>
        </thead>
        <tbody>
          <tr><td>Balones</td><td>4</td><td><button>+ Agregar</button></td></tr>
          <tr><td>Conos</td><td>20</td><td><button>+ Agregar</button></td></tr>
        </tbody>
      </table>
    </section>
  );
};

export default InventarioSection;
