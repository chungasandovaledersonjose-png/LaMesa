import { useState } from 'react';
import { Badge, Button, Modal } from 'react-bootstrap';

export const img = (nombre) => `${import.meta.env.BASE_URL}img/${nombre}`;

export function Logo({ alto = 44 }) {
  return <img className="logo-img" src={img('logo-01.png')} alt="La Mesa · Restaurante" style={{ height: alto, width: 'auto' }} />;
}

const CLASES = { Confirmada: 'estado-confirmada', Pendiente: 'estado-pendiente', Cancelada: 'estado-cancelada' };
export function EstadoBadge({ estado }) {
  return <Badge pill bg="none" className={`estado ${CLASES[estado]}`}>{estado}</Badge>;
}

/** Modal de confirmación (solo visual: sus botones cierran la ventana). */
export function ModalConfirmar({ show, titulo, children, textoAceptar, onCerrar }) {
  return (
    <Modal show={show} onHide={onCerrar} centered dialogClassName="modal-lamesa">
      <Modal.Body className="p-4">
        <h2 className="h5 fw-bold mb-3">{titulo}</h2>
        <div className="text-secondary">{children}</div>
        <div className="d-flex gap-2 justify-content-end mt-4">
          <Button variant="outline-secondary" onClick={onCerrar}>Volver</Button>
          <Button variant="danger" onClick={onCerrar}>{textoAceptar}</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

/** Selector de personas (solo cambia el número en pantalla). */
export function ContadorPersonas({ inicial = 4, max = 8 }) {
  const [v, setV] = useState(inicial);
  return (
    <div className="d-flex align-items-center gap-3">
      <Button variant="outline-secondary" className="contador-btn" disabled={v <= 1} onClick={() => setV(v - 1)} aria-label="Menos">−</Button>
      <span key={v} className="contador-valor">{v}</span>
      <Button variant="outline-secondary" className="contador-btn" disabled={v >= max} onClick={() => setV(v + 1)} aria-label="Más">+</Button>
      <small className="text-secondary">máx. {max}</small>
    </div>
  );
}

/** Ilustración con zoom al pasar el mouse. */
export function Foto({ src, alt = '', className = '', ratio = '4x3', children }) {
  return (
    <div className={`foto ratio ratio-${ratio} ${className}`}>
      <img src={img(src)} alt={alt} loading="lazy" />
      {children}
    </div>
  );
}
