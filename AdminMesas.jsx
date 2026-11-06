import { Badge } from 'react-bootstrap';
import { TituloAdmin } from '../../components/Layouts.jsx';
import { MESAS } from '../../data/datos.js';

export default function AdminMesas() {
  return (
    <>
      <TituloAdmin>Mesas</TituloAdmin>
      <div className="row g-4">
        {MESAS.map((m, i) => (
          <div className="col-md-6 col-xl-3" key={m.id} style={{ '--i': i }}>
            <div className={`tarjeta mesa-card ${m.bloq ? 'bloqueada' : ''}`}>
              <div className="mesa-sillas" aria-hidden>{Array.from({ length: m.cap }, (_, k) => <i key={k} style={{ '--k': k }} />)}</div>
              <h2 className="h5 fw-bold">Mesa {m.id}</h2>
              <p className="text-secondary mb-3">Capacidad: {m.cap} personas{m.bloq && ' · Bloqueada'}</p>
              <Badge bg="none" className={`estado ${m.bloq ? 'estado-cancelada' : 'estado-confirmada'}`}>{m.bloq ? 'Bloqueada' : 'Activa'}</Badge>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
