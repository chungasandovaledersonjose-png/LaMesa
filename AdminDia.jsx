import { useLocation } from 'react-router-dom';
import { AvisoToast, TituloAdmin } from '../../components/Layouts.jsx';
import TimelineDia from '../../components/TimelineDia.jsx';
import { EstadoBadge } from '../../components/ui.jsx';

export default function AdminDia() {
  const { state } = useLocation();
  return (
    <>
      <TituloAdmin atras="/admin">Sáb 24 oct</TituloAdmin>
      <TimelineDia />
      <div className="d-flex gap-2 mt-3"><EstadoBadge estado="Confirmada" /><EstadoBadge estado="Pendiente" /></div>
      {state?.guardado && <AvisoToast>Reserva guardada</AvisoToast>}
    </>
  );
}
