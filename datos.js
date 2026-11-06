// Datos que forman parte del maquetado (contenido estático, no se guarda nada).
export const PLATOS = [
  { id: 'ceviche', nombre: 'Ceviche clásico', desc: 'Pescado fresco, limón, ají limo y camote glaseado.', img: 'ceviche.jpeg' },
  { id: 'lomo', nombre: 'Lomo saltado', desc: 'Wok a fuego alto con cebolla, tomate y papas fritas.', img: 'Lomo-Saltado.jpeg' },
  { id: 'anticuchos', nombre: 'Anticuchos', desc: 'Corazón macerado a la parrilla con papa dorada.', img: 'anticuchos.jpeg' },
  { id: 'causa', nombre: 'Causa limeña', desc: 'Papa amarilla en capas, pollo, palta y huevo.', img: 'causa-limena.jpeg' },
  { id: 'cuy', nombre: 'Cuy chactado', desc: 'Crocante por fuera, jugoso por dentro, con ají.', img: 'cuy.jpeg' },
  { id: 'pachamanca', nombre: 'Pachamanca', desc: 'Carnes y tubérculos cocidos bajo tierra.', img: 'pachamanca.png' },
  { id: 'juane', nombre: 'Juane amazónico', desc: 'Arroz, pollo y huevo envueltos en hoja de bijao.', img: 'Juane.jpeg' },
  { id: 'rocoto', nombre: 'Rocoto relleno', desc: 'Rocoto arequipeño con carne, queso y pasas.', img: 'rocoto_relleno.jpeg' },
];

export const SLIDES = [
  { img: 'ceviche.jpeg', titulo: 'Ceviche de la casa' },
  { img: 'Lomo-Saltado.jpeg', titulo: 'Lomo saltado' },
  { img: 'anticuchos.jpeg', titulo: 'Anticuchos al carbón' },
  { img: 'pachamanca.png', titulo: 'Pachamanca' },
  { img: 'cuy.jpeg', titulo: 'Cuy chactado' },
];

export const BENEFICIOS = [
  { t: 'Disponibilidad real', d: 'Solo ves horarios libres', img: 'real.jpg' },
  { t: 'Confirmación inmediata', d: 'Código de reserva al instante', img: 'reserva.jpg' },
  { t: 'Cancela fácil', d: 'Desde Mis reservas', img: 'pago.webp' },
];

export const PASOS = [
  { n: 1, t: 'Elige fecha y personas', d: 'Hasta 8 comensales por reserva.', to: '/reservar/fecha' },
  { n: 2, t: 'Escoge tu horario', d: 'Almuerzo o cena, solo horarios libres.', to: '/reservar/horarios' },
  { n: 3, t: 'Confirma tus datos', d: 'Recibes tu código al instante.', to: '/reservar/datos' },
];

export const HORAS = [
  { turno: 'Almuerzo', horas: [['12:00', 0], ['12:30', 0], ['13:00', 0], ['13:30', 0], ['14:00', 1], ['14:30', 1], ['15:00', 1], ['15:30', 1]] },
  { turno: 'Cena', horas: [['19:00', 1], ['19:30', 1], ['20:00', 1], ['20:30', 1], ['21:00', 1], ['21:30', 1], ['22:00', 0]] },
];

// Calendario de octubre 2026 (lunes primero). Días 1–19 pasados.
export const CAL_OCT = [
  [null, null, null, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, null],
];
export const HOY_DIA = 20;
export const DIA_SEL = 24;
export const DIAS_LLENOS = [27];
export const RES_POR_DIA = { 22: 3, 23: 4, 24: 9, 25: 5, 26: 2, 28: 3, 30: 4, 31: 6 };

export const RESERVAS = [
  { f: '24/10', h: '20:30', c: 'Ana Pérez', p: 4, m: 5, e: 'Pendiente' },
  { f: '24/10', h: '13:30', c: 'Luis Gómez', p: 2, m: 2, e: 'Confirmada' },
  { f: '24/10', h: '21:00', c: 'Grupo Ríos', p: 6, m: 8, e: 'Confirmada' },
  { f: '25/10', h: '19:00', c: 'María Soto', p: 3, m: 3, e: 'Cancelada' },
  { f: '25/10', h: '20:00', c: 'Pedro Lara', p: 5, m: 6, e: 'Confirmada' },
];

export const DIA_LISTA = [
  { h: '13:30', m: 2, c: 'Luis Gómez', p: 2, e: 'Confirmada' },
  { h: '20:30', m: 5, c: 'Ana Pérez', p: 4, e: 'Pendiente' },
  { h: '21:00', m: 8, c: 'Grupo Ríos', p: 6, e: 'Confirmada' },
];

export const MESAS = [
  { id: 1, cap: 2 }, { id: 2, cap: 2 }, { id: 3, cap: 4 }, { id: 4, cap: 4, bloq: true },
  { id: 5, cap: 4 }, { id: 6, cap: 6 }, { id: 7, cap: 6 }, { id: 8, cap: 6 },
];

// Bloques de la línea de tiempo: mesa, inicio, duración (min), etiqueta, estado
export const TIMELINE = [
  { mesa: 1, ini: '12:00', txt: 'Rojas · 2', e: 'Confirmada' },
  { mesa: 2, ini: '13:30', txt: 'Gómez · 2', e: 'Confirmada' },
  { mesa: 2, ini: '20:00', txt: 'Vega · 2', e: 'Confirmada' },
  { mesa: 3, ini: '13:00', txt: 'Ruiz · 4', e: 'Confirmada' },
  { mesa: 3, ini: '14:00', txt: 'Paz · 4', e: 'Pendiente' },
  { mesa: 3, ini: '19:30', txt: 'Soto · 3', e: 'Confirmada' },
  { mesa: 5, ini: '13:00', txt: 'Salas · 4', e: 'Confirmada' },
  { mesa: 5, ini: '20:30', txt: 'Pérez · 4', e: 'Pendiente' },
  { mesa: 6, ini: '12:30', txt: 'Lara · 5', e: 'Confirmada' },
  { mesa: 6, ini: '19:30', txt: 'Cruz · 6', e: 'Confirmada' },
  { mesa: 7, ini: '13:00', txt: 'Andina · 6', e: 'Confirmada' },
  { mesa: 8, ini: '13:00', txt: 'Mena · 6', e: 'Confirmada' },
  { mesa: 8, ini: '21:00', txt: 'Ríos · 6', e: 'Confirmada' },
];
