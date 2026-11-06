import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AdminLayout, ClienteLayout } from './components/Layouts.jsx';
import Inicio from './pages/Inicio.jsx';
import Login from './pages/Login.jsx';
import Fechas from './pages/Fechas.jsx';
import Horarios from './pages/Horarios.jsx';
import Datos from './pages/Datos.jsx';
import Confirmacion from './pages/Confirmacion.jsx';
import MisReservas from './pages/MisReservas.jsx';
import AdminCalendario from './pages/admin/AdminCalendario.jsx';
import AdminDia from './pages/admin/AdminDia.jsx';
import AdminNueva from './pages/admin/AdminNueva.jsx';
import AdminLista from './pages/admin/AdminLista.jsx';
import AdminMesas from './pages/admin/AdminMesas.jsx';
import AdminPerfil from './pages/admin/AdminPerfil.jsx';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<ClienteLayout />}>
          <Route index element={<Inicio />} />
          <Route path="login" element={<Login />} />
          <Route path="reservar/fecha" element={<Fechas />} />
          <Route path="reservar/horarios" element={<Horarios />} />
          <Route path="reservar/datos" element={<Datos />} />
          <Route path="reservar/confirmacion" element={<Confirmacion />} />
          <Route path="mis-reservas" element={<MisReservas />} />
        </Route>
        <Route path="admin/login" element={<Login admin />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminCalendario />} />
          <Route path="dia" element={<AdminDia />} />
          <Route path="nueva" element={<AdminNueva />} />
          <Route path="nueva/conflicto" element={<AdminNueva conflicto />} />
          <Route path="reservas" element={<AdminLista />} />
          <Route path="mesas" element={<AdminMesas />} />
          <Route path="perfil" element={<AdminPerfil />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
