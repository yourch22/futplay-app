// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import AdminPanel from './pages/AdminPanel';
import EmpleadoPanel from './pages/EmpleadoPanel';
import NotFound from './pages/NotFound';

const ProtectedRoute = ({ children, role }) => {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/login" />;
  if (role && usuario.rol !== role) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={
            <ProtectedRoute role="ADMIN">
              <AdminPanel />
            </ProtectedRoute>
          } />
          <Route path="/empleado" element={
            <ProtectedRoute role="EMPLEADO">
              <EmpleadoPanel />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
