import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendario from '../../components/Calendario.jsx';
import { TituloAdmin } from '../../components/Layouts.jsx';
import { EstadoBadge, Foto } from '../../components/ui.jsx';
import { DIA_LISTA } from '../../data/datos.js';
import { NumeroAnimado } from '../../hooks/useAnimacion.jsx';

export default function AdminCalendario() {
  const [semana, setSemana] = useState(false);
  return (
    <>
      <TituloAdmin>Calendario</TituloAdmin>
      <div className="row g-4">
        <div className="col-xl-8">
          <div className="tarjeta">
            <div className="d-flex justify-content-end mb-2">
              <ButtonGroup size="sm">
                <Button variant={semana ? 'primary' : 'outline-secondary'} onClick={() => setSemana(true)}>Semana</Button>
                <Button variant={!semana ? 'primary' : 'outline-secondary'} onClick={() => setSemana(false)}>Mes</Button>
              </ButtonGroup>
            </div>
            <Calendario admin semana={semana} />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="tarjeta p-0 overflow-hidden">
            <Foto src="reserva.jpg" ratio="21x9" />
            <div className="p-3">
              <h2 className="h5 fw-bold mb-3">Sáb 24 oct</h2>
              <div className="row text-center g-2 mb-3">
                <div className="col-4"><div className="kpi"><NumeroAnimado valor={34} /></div><small className="text-secondary">reservas</small></div>
                <div className="col-4"><div className="kpi"><NumeroAnimado valor={118} /></div><small className="text-secondary">personas</small></div>
                <div className="col-4"><div className="kpi"><NumeroAnimado valor={2} /></div><small className="text-secondary">mesas libres a las 20:30</small></div>
              </div>
              <ul className="list-unstyled mb-3">
                {DIA_LISTA.map((r, i) => (
                  <li key={r.h} className="fila-dia d-flex justify-content-between align-items-center py-2 border-top" style={{ '--i': i }}>
                    <div><strong>{r.h} · Mesa {r.m}</strong><br /><small className="text-secondary">{r.c} · {r.p} pers.</small></div>
                    <EstadoBadge estado={r.e} />
                  </li>
                ))}
              </ul>
              <Button as={Link} to="/admin/dia" variant="outline-primary" className="w-100">Ver línea de tiempo del día</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
