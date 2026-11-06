import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Foto } from '../components/ui.jsx';

const GCAL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reserva+en+La+Mesa&dates=20261024T203000/20261024T220000&details=C%C3%B3digo+RSV-4821&location=Restaurante+La+Mesa,+San+Isidro,+Lima';

export default function Confirmacion() {
  return (
    <Container className="paso text-center" style={{ maxWidth: 680 }}>
      <h1 className="h2 fw-bold mb-4">Reserva confirmada</h1>
      <svg className="check-svg mb-4" viewBox="0 0 100 100" aria-hidden>
        <circle className="check-aro" cx="50" cy="50" r="44" /><path className="check-tick" d="M30 52l14 14 27-30" />
      </svg>
      <div className="tarjeta text-start p-0 overflow-hidden mb-4 conf-card">
        <Foto src="rocoto_relleno.jpeg" ratio="21x9" />
        <div className="p-4">
          <p className="h5 fw-bold text-primary">Código RSV-4821</p>
          <p className="mb-1">Sábado 24 de octubre · 20:30</p>
          <p className="mb-1">4 personas · Mesa asignada al llegar</p>
          <p className="mb-0">A nombre de Ana Pérez</p>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Button href={GCAL} target="_blank" rel="noreferrer" size="lg" className="px-4 btn-brillo">Agregar a mi calendario</Button>
        <Button as={Link} to="/mis-reservas" size="lg" variant="outline-secondary">Ver mis reservas</Button>
      </div>
    </Container>
  );
}
