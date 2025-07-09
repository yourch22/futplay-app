import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Corrección aquí

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contraseña }),
      });

      if (!res.ok) throw new Error("Credenciales inválidas");

      const userData = await res.json();
      login(userData); // ✅ guarda en contexto y localStorage

      // Redirige según rol
      if (userData.rol === "ADMIN") {
        navigate("/admin");
      } else if (userData.rol === "EMPLEADO") {
        navigate("/empleado");
      } else {
        setError("Rol no autorizado");
      }
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #00c3ff, #2f80ed)" }}>
      <div className="login-box text-center bg-white p-4 rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <img src="/Medios/pelota.jpg" alt="Logo" className="rounded-circle mb-3" style={{ width: "60px" }} />
        <h2 className="text-primary fw-bold mb-3">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              placeholder="ejemplo@ballfix.com"
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
              placeholder="********"
            />
          </div>

          {error && <div className="text-danger mb-2">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>

        <p className="mt-3 text-secondary" style={{ fontSize: "0.9rem" }}>
          ¿Olvidaste tu contraseña? Contacta al administrador.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
