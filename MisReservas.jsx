import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Paso } from '../components/Layouts.jsx';
import { EstadoBadge, ModalConfirmar, img } from '../components/ui.jsx';

const LISTA = [
  { f: 'Sáb 24 oct · 20:30', d: '4 personas · RSV-4821', e: 'Confirmada', foto: 'Lomo-Saltado.jpeg' },
  { f: 'Dom 2 nov · 13:30', d: '2 personas · RSV-4977', e: 'Pendiente', foto: 'cuy.jpeg' },
];

export default function MisReservas() {
  const [modal, setModal] = useState(false);
  return (
    <Paso titulo="Mis reservas" atras="/" foto="ceviche.jpeg" fotoTexto="Te esperamos">
      <Form className="mb-4" onSubmit={(e) => e.preventDefault()}>
        <Form.Label className="fw-semibold">Busca por tu teléfono</Form.Label>
        <div className="d-flex gap-2"><Form.Control defaultValue="987 654 321" /><Button type="submit">Buscar</Button></div>
      </Form>
      {LISTA.map((r, i) => (
        <div className="tarjeta reserva-card mb-3 d-flex gap-3 align-items-center" key={r.d} style={{ '--i': i }}>
          <img src={img(r.foto)} alt="" className="reserva-thumb" />
          <div className="flex-grow-1">
            <p className="fw-bold mb-1">{r.f}</p><p className="text-secondary mb-2">{r.d}</p>
            <Button variant="link" className="p-0 text-danger" onClick={() => setModal(true)}>Cancelar reserva</Button>
          </div>
          <EstadoBadge estado={r.e} />
        </div>
      ))}
      <ModalConfirmar show={modal} titulo="¿Cancelar tu reserva?" textoAceptar="Cancelar reserva" onCerrar={() => setModal(false)}>
        <p className="fw-semibold text-dark mb-1">Sáb 24 oct · 20:30 · 4 personas</p>
        <p className="mb-0">Esta acción libera la mesa para otros clientes.</p>
      </ModalConfirmar>
    </Paso>
  );
}
