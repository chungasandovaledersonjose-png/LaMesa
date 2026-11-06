import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { HORAS } from '../data/datos.js';

/** Cuadrícula de horarios (maquetado): libre / ocupado / seleccionado. */
export default function SelectorHorarios({ inicial = '20:30', onElegir }) {
  const [sel, setSel] = useState(inicial);
  return (
    <>
      {HORAS.map((t) => (
        <section key={t.turno} className="mb-4">
          <h3 className="h6 fw-semibold mb-2">{t.turno}</h3>
          <div className="row g-2 row-cols-4">
            {t.horas.map(([h, libre], i) => (
              <div className="col" key={h} style={{ '--i': i }}>
                <Button className="w-100 hora-btn" variant={sel === h ? 'primary' : libre ? 'outline-primary' : 'light'} disabled={!libre}
                  onClick={() => { setSel(h); onElegir?.(h); }}>
                  {h}
                </Button>
              </div>
            ))}
          </div>
        </section>
      ))}
      <div className="d-flex gap-4 small text-secondary mb-2">
        <span><i className="dot dot-libre" /> Disponible</span><span><i className="dot dot-ocupado" /> Ocupado</span><span><i className="dot dot-sel" /> Seleccionado</span>
      </div>
    </>
  );
}
