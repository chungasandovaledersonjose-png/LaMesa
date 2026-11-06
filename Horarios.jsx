import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Paso } from '../components/Layouts.jsx';
import SelectorHorarios from '../components/SelectorHorarios.jsx';

export default function Horarios() {
  return (
    <Paso titulo="Horarios disponibles" paso={2} atras="/reservar/fecha" foto="anticuchos.jpeg" fotoTexto="Anticuchos">
      <p className="fw-semibold">Sáb 24 oct · 4 personas</p>
      <SelectorHorarios />
      <Button as={Link} to="/reservar/datos" size="lg" className="px-5 mt-3 btn-brillo">Continuar con 20:30</Button>
    </Paso>
  );
}
