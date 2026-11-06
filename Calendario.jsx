// Calendario de octubre 2026 (maquetado). Elegir un día solo lo resalta en pantalla.
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CAL_OCT, DIAS_LLENOS, DIA_SEL, HOY_DIA, RES_POR_DIA } from '../data/datos.js';

export default function Calendario({ admin = false, semana = false, onElegir }) {
  const [sel, setSel] = useState(DIA_SEL);
  const filas = semana ? CAL_OCT.filter((f) => f.includes(sel)) : CAL_OCT;
  const elegir = (d) => { setSel(d); onElegir?.(d); };
  return (
    <div className="calendario" data-modo={admin ? 'admin' : 'cliente'}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="h5 fw-bold mb-0">Octubre 2026</h2>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" size="sm" aria-label="Mes anterior">‹</Button>
          <Button variant="outline-secondary" size="sm" aria-label="Mes siguiente">›</Button>
        </div>
      </div>
      <div className="cal-grid cal-head">{['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => <span key={i}>{d}</span>)}</div>
      {filas.map((fila, i) => (
        <div className="cal-grid" key={i}>
          {fila.map((d, j) => {
            if (!d) return <span key={j} />;
            const pasado = !admin && d < HOY_DIA;
            const lleno = !admin && DIAS_LLENOS.includes(d);
            return (
              <button key={d} type="button" disabled={pasado || lleno} onClick={() => elegir(d)}
                style={{ '--i': i * 7 + j }} className={`cal-dia ${d === sel ? 'activo' : ''} ${d === HOY_DIA ? 'hoy' : ''}`}>
                <span>{d}</span>
                {admin && RES_POR_DIA[d] && <small>{RES_POR_DIA[d]} res.</small>}
                {lleno && <small>Lleno</small>}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
