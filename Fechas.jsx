import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendario from '../components/Calendario.jsx';
import { Paso } from '../components/Layouts.jsx';
import { ContadorPersonas } from '../components/ui.jsx';

export default function Fechas() {
  return (
    <Paso titulo="Elige fecha y personas" paso={1} atras="/" foto="causa-limena.jpeg" fotoTexto="Causa limeña">
      <div className="tarjeta mb-4"><Calendario /></div>
      <h2 className="h6 fw-bold">Número de personas</h2>
      <div className="mb-4"><ContadorPersonas /></div>
      <Button as={Link} to="/reservar/horarios" size="lg" className="px-5 btn-brillo">Ver horarios</Button>
    </Paso>
  );
}
