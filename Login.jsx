import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo, img } from '../components/ui.jsx';

/** Login del cliente y del administrador (maquetado: "Ingresar" solo navega). */
export default function Login({ admin = false }) {
  return (
    <div className={`login ${admin ? 'login-admin' : ''}`} style={admin ? { '--bg': `url(${new URL(img('anticuchos.jpeg'), document.baseURI).href})` } : undefined}>
      <div className="login-card tarjeta p-0 overflow-hidden">
        {!admin && <div className="login-foto d-none d-md-block" style={{ backgroundImage: `url(${img('pachamanca.png')})` }}><span className="foto-cap">Tu mesa te espera</span></div>}
        <div className="login-form p-4 p-md-5">
          <div className="text-center mb-4"><Logo alto={48} />
            <p className="text-secondary mt-3 mb-0">{admin ? 'Acceso del personal' : 'Accede para ver y gestionar tus reservas'}</p></div>
          <Form>
            <Form.Group className="mb-3" controlId="u"><Form.Label className="fw-semibold">{admin ? 'Usuario' : 'Correo o teléfono'}</Form.Label>
              <Form.Control placeholder={admin ? 'admin' : 'Ingresa tu correo o teléfono'} /></Form.Group>
            <Form.Group className="mb-3" controlId="p"><Form.Label className="fw-semibold">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="••••••" /></Form.Group>
            {!admin && <Form.Check className="mb-3" id="rec" label="Recordarme en este equipo" />}
            <Button as={Link} to={admin ? '/admin' : '/mis-reservas'} className="w-100 btn-brillo" size="lg">Ingresar</Button>
          </Form>
          {!admin && <p className="text-center mt-4 mb-0 small">¿No tienes cuenta? <Link to="/reservar/fecha">Reserva sin registrarte</Link></p>}
          {admin && <p className="text-center mt-4 mb-0 small"><Link to="/">← Volver al sitio</Link></p>}
        </div>
      </div>
    </div>
  );
}
