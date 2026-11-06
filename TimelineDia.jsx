// Línea de tiempo del día (maquetado): mesas × horas, de 12:00 a 23:00.
import { MESAS, TIMELINE } from '../data/datos.js';

const INI = 12 * 60, FIN = 23 * 60;
const min = (h) => { const [a, b] = h.split(':').map(Number); return a * 60 + b; };
const pct = (m) => ((m - INI) / (FIN - INI)) * 100;

export default function TimelineDia() {
  return (
    <div className="tarjeta p-3 timeline">
      <div className="tl-fila tl-cab">
        <span />
        <div className="tl-pista">{Array.from({ length: 12 }, (_, i) => 12 + i).map((h) => (
          <span key={h} className="tl-hora" style={{ left: `${pct(h * 60)}%` }}>{String(h).padStart(2, '0')}:00</span>))}</div>
      </div>
      {MESAS.map((m, fila) => (
        <div className="tl-fila" key={m.id}>
          <span className="tl-mesa">Mesa {m.id}{m.bloq && <small className="text-secondary"> · bloqueada</small>}</span>
          <div className={`tl-pista ${m.bloq ? 'bloqueada' : ''}`}>
            <div className="tl-cerrado" style={{ left: `${pct(16 * 60)}%`, width: `${pct(19 * 60) - pct(16 * 60)}%` }} />
            {TIMELINE.filter((b) => b.mesa === m.id).map((b, i) => (
              <button key={b.ini + b.txt} type="button" className={`tl-bloque estado-${b.e.toLowerCase()}`}
                style={{ left: `${pct(min(b.ini))}%`, width: `${pct(min(b.ini) + 90) - pct(min(b.ini))}%`, '--d': `${fila * 70 + i * 120}ms` }}
                title={`${b.ini} · ${b.txt} · ${b.e}`}>
                {b.txt}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
