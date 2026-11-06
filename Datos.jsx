import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Paso } from '../components/Layouts.jsx';

export default function Datos() {
  return (
    <Paso titulo="Tus datos" paso={3} atras="/reservar/horarios" foto="pachamanca.png" fotoTexto="Pachamanca">
      <div className="tarjeta resumen d-flex justify-content-between align-items-center mb-4">
        <div><small className="text-secondary d-block">Resumen</small><strong>Sáb 24 oct · 20:30 · 4 personas</strong></div>
        <Link to="/reservar/fecha">Cambiar</Link>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="n"><Form.Label className="fw-semibold">Nombre completo</Form.Label><Form.Control defaultValue="Ana Pérez" /></Form.Group>
        <Form.Group className="mb-3" controlId="t"><Form.Label className="fw-semibold">Teléfono</Form.Label><Form.Control defaultValue="987 654 321" />
          <Form.Text>Ingresa un teléfono de 9 dígitos</Form.Text></Form.Group>
        <Form.Group className="mb-3" controlId="c"><Form.Label className="fw-semibold">Correo electrónico</Form.Label><Form.Control defaultValue="ana@correo.com" /></Form.Group>
        <Form.Group className="mb-4" controlId="m"><Form.Label className="fw-semibold">Comentario (opcional)</Form.Label>
          <Form.Control as="textarea" rows={2} defaultValue="Cumpleaños, mesa cerca a la ventana" /></Form.Group>
        <Button as={Link} to="/reservar/confirmacion" size="lg" className="px-5 btn-brillo">Confirmar reserva</Button>
      </Form>
    </Paso>
  );
}
