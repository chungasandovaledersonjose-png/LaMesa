import { useState } from 'react';
import { Form, Pagination, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TituloAdmin } from '../../components/Layouts.jsx';
import { EstadoBadge, ModalConfirmar } from '../../components/ui.jsx';
import { RESERVAS } from '../../data/datos.js';

export default function AdminLista() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <TituloAdmin>Reservas</TituloAdmin>
      <div className="row g-3 mb-4">
        <div className="col-md-5"><Form.Label className="fw-semibold small">Buscar</Form.Label><Form.Control placeholder="Nombre o teléfono" /></div>
        <div className="col-md-4 col-6"><Form.Label className="fw-semibold small">Fecha</Form.Label><Form.Control defaultValue="24/10/2026" /></div>
        <div className="col-md-3 col-6"><Form.Label className="fw-semibold small">Estado</Form.Label><Form.Select><option>Todos</option><option>Confirmada</option><option>Pendiente</option><option>Cancelada</option></Form.Select></div>
      </div>
      <div className="tarjeta p-0 overflow-hidden">
        <Table hover responsive className="mb-0 align-middle tabla-reservas">
          <thead><tr><th>Fecha</th><th>Hora</th><th>Cliente</th><th>Personas</th><th>Mesa</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>
            {RESERVAS.map((r, i) => (
              <tr key={r.c} style={{ '--i': i }}>
                <td>{r.f}</td><td>{r.h}</td><td className="fw-semibold">{r.c}</td><td>{r.p}</td><td>Mesa {r.m}</td><td><EstadoBadge estado={r.e} /></td>
                <td className="text-nowrap"><Link to="/admin/nueva" className="me-3">Editar</Link>
                  <a href="#/admin/reservas" className="text-danger" onClick={(e) => { e.preventDefault(); setModal(true); }}>Cancelar</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
        <small className="text-secondary">Mostrando 5 de 34 reservas</small>
        <Pagination className="mb-0" size="sm"><Pagination.Prev /><Pagination.Item active>1</Pagination.Item><Pagination.Item>2</Pagination.Item><Pagination.Item>3</Pagination.Item><Pagination.Next /></Pagination>
      </div>
      <ModalConfirmar show={modal} titulo="¿Cancelar esta reserva?" textoAceptar="Cancelar reserva" onCerrar={() => setModal(false)}>
        <p className="mb-0">Esta acción libera la mesa para otros clientes.</p>
      </ModalConfirmar>
    </>
  );
}
