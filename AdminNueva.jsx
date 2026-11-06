import { Alert, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TituloAdmin } from '../../components/Layouts.jsx';

/** Nueva reserva. Con `conflicto` muestra el estado de error del wireframe. */
export default function AdminNueva({ conflicto = false }) {
  return (
    <>
      <TituloAdmin atras="/admin">Nueva reserva</TituloAdmin>
      <Form className="tarjeta" style={{ maxWidth: 680 }} onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3"><Form.Label className="fw-semibold">Cliente</Form.Label><Form.Control defaultValue="Jorge Salas" /></Form.Group>
        <Form.Group className="mb-3"><Form.Label className="fw-semibold">Teléfono</Form.Label><Form.Control defaultValue="987 111 222" /></Form.Group>
        <div className="row g-3 mb-3">
          <div className="col-4"><Form.Label className="fw-semibold">Personas</Form.Label><Form.Control defaultValue="4" /></div>
          <div className="col-4"><Form.Label className="fw-semibold">Fecha</Form.Label><Form.Control defaultValue="24/10/2026" /></div>
          <div className="col-4"><Form.Label className="fw-semibold">Hora</Form.Label><Form.Select defaultValue={conflicto ? '20:00' : '20:30'}><option>20:00</option><option>20:30</option></Form.Select></div>
        </div>
        <Form.Group className="mb-3"><Form.Label className="fw-semibold">Mesa</Form.Label>
          <Form.Select isInvalid={conflicto} defaultValue="5"><option value="3">Mesa 3 · 4 pers. — Libre</option><option value="5">Mesa 5 · 4 pers. — {conflicto ? 'Ocupada 19:30–21:00' : 'Libre'}</option>
            <option value="7">Mesa 7 · 6 pers. — Libre</option><option value="8">Mesa 8 · 6 pers. — Ocupada 21:00–22:30</option></Form.Select></Form.Group>
        {conflicto && (
          <Alert variant="danger" className="conflicto alerta-entra">
            <strong>Conflicto de horario</strong>
            <div>La mesa 5 ya tiene reserva de 19:30 a 21:00. Mesas libres a las 20:00: 3, 7</div>
            <Button as={Link} to="/admin/nueva" size="sm" variant="outline-danger" className="mt-2">Usar Mesa 7</Button>
          </Alert>
        )}
        <Form.Group className="mb-4"><Form.Label className="fw-semibold">Estado</Form.Label><Form.Select><option>Confirmada</option><option>Pendiente</option></Form.Select></Form.Group>
        <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
          <Button as={Link} to="/admin/dia" state={{ guardado: true }} size="lg" className="px-5 btn-brillo">Guardar</Button>
          {!conflicto && <Link to="/admin/nueva/conflicto" className="small">Ver ejemplo de conflicto</Link>}
        </div>
      </Form>
    </>
  );
}
