import { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, Toast, ToastContainer } from 'react-bootstrap';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Foto, Logo, img } from './ui.jsx';

function useScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  return pathname;
}

/** Barra superior + contenido + pie del sitio del cliente. */
export function ClienteLayout() {
  const pathname = useScrollTop();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <>
      <Navbar className={`topbar sticky-top ${scrolled ? 'scrolled' : ''}`} expand="sm">
        <Container fluid className="px-4 px-lg-5">
          <Navbar.Brand as={Link} to="/" className="brand"><Logo /></Navbar.Brand>
          <Nav className="ms-auto align-items-center gap-1 flex-row">
            <Nav.Link as={NavLink} to="/reservar/fecha" className="nav-anim">Reservar</Nav.Link>
            <Nav.Link as={NavLink} to="/mis-reservas" className="nav-anim">Mis reservas</Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="nav-anim d-none d-sm-block">Ingresar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main key={pathname} className="page-enter"><Outlet /></main>
      <footer className="pie-sitio">
        <Container className="py-5">
          <div className="row g-4 align-items-center">
            <div className="col-md-5"><Logo alto={52} />
              <p className="mt-3 mb-0 text-secondary">Cocina peruana · San Isidro, Lima<br />Lunes a domingo · 12:00–16:00 y 19:00–23:00</p></div>
            <div className="col-md-4 d-flex gap-2">
              {['ceviche.jpeg', 'anticuchos.jpeg', 'rocoto_relleno.jpeg'].map((f) => <Foto key={f} src={f} ratio="1x1" className="mini rounded-3" />)}
            </div>
            <div className="col-md-3 d-grid gap-2">
              <Button as={Link} to="/reservar/fecha">Reservar mesa</Button>
              <Button as={Link} to="/admin/login" variant="outline-secondary" size="sm">Acceso administración</Button>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

/** Contenedor de un paso: barra de progreso animada + columna principal + foto lateral. */
export function Paso({ titulo, paso, atras, foto, fotoTexto, children }) {
  return (
    <Container className="paso">
      <div className="row g-5 justify-content-center">
        <div className="col-lg-7" style={{ maxWidth: 680 }}>
          {atras && <Link to={atras} className="volver">‹ Atrás</Link>}
          <h1 className="h2 fw-bold mb-1">{titulo}</h1>
          {paso && (<>
            <p className="text-secondary mb-2">Paso {paso} de 3</p>
            <div className="progreso mb-4"><span style={{ '--w': `${(paso / 3) * 100}%` }} /></div>
          </>)}
          {children}
        </div>
        {foto && (
          <aside className="col-lg-4 d-none d-lg-block">
            <div className="aside-foto">
              <Foto src={foto} ratio="3x4" className="rounded-4 shadow"><span className="foto-cap">{fotoTexto}</span></Foto>
            </div>
          </aside>
        )}
      </div>
    </Container>
  );
}

const MENU = [
  { to: '/admin', etiqueta: 'Calendario', icono: '▦', end: true },
  { to: '/admin/reservas', etiqueta: 'Reservas', icono: '☰' },
  { to: '/admin/mesas', etiqueta: 'Mesas', icono: '◫' },
  { to: '/admin/perfil', etiqueta: 'Perfil', icono: '◔' },
];

export function AdminLayout() {
  const pathname = useScrollTop();
  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <Link to="/" className="side-logo" title="Ir al sitio"><img src={img('logo-01.png')} alt="La Mesa" /></Link>
        <Nav className="flex-column">
          {MENU.map((m) => (
            <Nav.Link key={m.to} as={NavLink} to={m.to} end={m.end}><span className="me-2" aria-hidden>{m.icono}</span>{m.etiqueta}</Nav.Link>
          ))}
        </Nav>
      </aside>
      <div className="admin-main">
        <header className="admin-top">
          <div className="flex-grow-1" />
          <Button as={Link} to="/admin/nueva">+ Nueva reserva</Button>
          <Link to="/admin/login" className="admin-user">Admin: Carla R. <small>· Salir</small></Link>
        </header>
        <div key={pathname} className="admin-contenido page-enter"><Outlet /></div>
      </div>
    </div>
  );
}

export function TituloAdmin({ children, atras }) {
  return (
    <div className="d-flex align-items-center gap-3 mb-4">
      {atras && <Link to={atras} className="volver mb-0">‹ Atrás</Link>}
      <h1 className="h3 fw-bold mb-0">{children}</h1>
    </div>
  );
}

export function AvisoToast({ children }) {
  return (
    <ToastContainer position="bottom-end" className="p-4">
      <Toast show bg="success" className="toast-entra"><Toast.Body className="text-white fw-semibold">✓ {children}</Toast.Body></Toast>
    </ToastContainer>
  );
}
