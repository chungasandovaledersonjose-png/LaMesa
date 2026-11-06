import { Button, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Reveal } from '../hooks/useAnimacion.jsx';
import { BENEFICIOS, PASOS, PLATOS, SLIDES } from '../data/datos.js';
import { Foto, img } from '../components/ui.jsx';

export default function Inicio() {
  return (
    <>
      <Container fluid className="inicio px-4 px-lg-5">
        <div className="row g-5 align-items-center py-4 py-lg-5">
          <div className="col-lg-6">
            <Carousel fade interval={4500} pause="hover" className="hero-carousel shadow">
              {SLIDES.map((s) => (
                <Carousel.Item key={s.img}>
                  <img className="d-block w-100 hero-img" src={img(s.img)} alt={s.titulo} />
                  <Carousel.Caption><span className="cap-pill">{s.titulo}</span></Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-lg-6 hero-texto">
            <span className="abierto"><i /> Abierto hoy · 12:00–16:00 y 19:00–23:00</span>
            <h1 className="display-4 fw-bold mt-3">Restaurante La Mesa</h1>
            <p className="fs-5 text-secondary mb-4">Cocina peruana · San Isidro, Lima</p>
            <h2 className="h6 fw-bold mb-1">Horario de atención</h2>
            <p className="mb-4">Lunes a domingo · 12:00–16:00 y 19:00–23:00</p>
            <p className="fw-semibold mb-4">Reserva tu mesa en 3 pasos, sin llamar por teléfono.</p>
            <div className="d-flex flex-wrap gap-3">
              <Button as={Link} to="/reservar/fecha" size="lg" className="px-4 btn-brillo">Reservar mesa</Button>
              <Button as={Link} to="/mis-reservas" size="lg" variant="outline-secondary" className="px-4">Mis reservas</Button>
            </div>
          </div>
        </div>

        <div className="row g-4 pb-5">
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.t} className="col-md-4" delay={i * 120}>
              <Link to="/reservar/fecha" className="tarjeta beneficio h-100 p-0 overflow-hidden d-block text-decoration-none text-reset">
                <Foto src={b.img} ratio="16x9" />
                <div className="p-3"><h3 className="h6 fw-bold mb-1">{b.t}</h3><p className="mb-0 text-secondary">{b.d}</p></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="marquee" aria-hidden>
        <div className="marquee-pista">
          {[...PLATOS, ...PLATOS].map((p, i) => <span key={i}>{p.nombre} <b>✦</b></span>)}
        </div>
      </div>

      <section className="seccion">
        <Container>
          <Reveal className="text-center mb-5">
            <p className="sobre">Nuestra carta</p>
            <h2 className="fw-bold">Sabores del Perú para tu mesa</h2>
          </Reveal>
          <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-4">
            {PLATOS.map((p, i) => (
              <Reveal key={p.id} className="col" delay={(i % 4) * 90}>
                <Link to="/reservar/fecha" className="plato">
                  <Foto src={p.img} ratio="4x3" className="rounded-4" />
                  <div className="plato-info"><h3 className="h6 fw-bold mb-1">{p.nombre}</h3><p>{p.desc}</p><span>Reservar →</span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="seccion seccion-clara">
        <Container>
          <Reveal className="text-center mb-5"><p className="sobre">Cómo funciona</p><h2 className="fw-bold">Reserva en 3 pasos</h2></Reveal>
          <div className="row g-4 pasos-linea">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} className="col-md-4" delay={i * 140}>
                <Link to={p.to} className="paso-card tarjeta d-block text-decoration-none text-reset text-center">
                  <span className="paso-num">{p.n}</span>
                  <h3 className="h5 fw-bold mt-3">{p.t}</h3><p className="text-secondary mb-0">{p.d}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="cta" style={{ backgroundImage: `linear-gradient(rgba(31,22,17,.72),rgba(31,22,17,.82)),url(${img('rocoto_relleno.jpeg')})` }}>
        <Reveal className="text-center text-white py-5 px-3">
          <h2 className="display-6 fw-bold">¿Listo para sentarte a la mesa?</h2>
          <p className="fs-5 mb-4 opacity-75">Elige tu fecha y asegura tu lugar en menos de un minuto.</p>
          <Button as={Link} to="/reservar/fecha" size="lg" className="px-5 btn-brillo">Reservar mesa</Button>
        </Reveal>
      </section>
    </>
  );
}
