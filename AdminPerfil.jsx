import { TituloAdmin } from '../../components/Layouts.jsx';
import { img } from '../../components/ui.jsx';
export default function AdminPerfil() {
  return (<><TituloAdmin>Perfil</TituloAdmin>
    <div className="tarjeta d-flex align-items-center gap-3" style={{ maxWidth: 480 }}>
      <img src={img('icono.png')} alt="" width="64" height="64" className="rounded-3 avatar" />
      <div><p className="fw-bold mb-1">Carla R.</p><p className="text-secondary mb-0">Administradora · La Mesa San Isidro</p></div>
    </div></>);
}
