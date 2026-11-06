================================================================================
  LA MESA · SISTEMA DE RESERVAS PARA RESTAURANTE  (Prototipo animado)
  Restaurante La Mesa · Cocina peruana · San Isidro, Lima
================================================================================


1. ¿QUÉ ES ESTE PROYECTO?
--------------------------------------------------------------------------------
Es un PROTOTIPO VISUAL (maquetado interactivo) de un sistema web de reservas
para el restaurante "La Mesa". Permite recorrer todo el flujo como si fuera
una aplicación real:

  - Un SITIO PARA CLIENTES: ver la carta, reservar una mesa en 3 pasos,
    consultar y cancelar reservas.
  - Un PANEL DE ADMINISTRACIÓN: calendario, línea de tiempo por mesa, listado
    de reservas, gestión de mesas y creación de reservas con detección de
    conflictos.

IMPORTANTE: es un prototipo de interfaz. NO tiene base de datos ni servidor.
Los datos que se ven (reservas, clientes, horarios, mesas) son de ejemplo y
están escritos dentro del código. Los botones navegan entre pantallas y
muestran animaciones, pero no guardan información de verdad.


2. TECNOLOGÍAS UTILIZADAS
--------------------------------------------------------------------------------
  - React 18.3          Construcción de la interfaz con componentes.
  - Vite 5              Herramienta de desarrollo y empaquetado (rápida).
  - React Router 6      Navegación entre pantallas (usa HashRouter, es decir,
                        las direcciones llevan "#", ej: /#/reservar/fecha).
  - Bootstrap 5.3       Base de estilos y diseño adaptable (responsive).
  - React-Bootstrap     Componentes de Bootstrap hechos para React (botones,
                        formularios, modales, carrusel, tablas, avisos...).
  - Fuente Inter        Tipografía del sitio (pesos 400, 600 y 700).
  - CSS propio          Archivo styles.css con identidad visual y animaciones.

Por qué HashRouter + base './': permite abrir el proyecto ya compilado desde
cualquier carpeta o hosting estático (GitHub Pages, Netlify, etc.) sin
configurar el servidor.


3. CÓMO EJECUTARLO
--------------------------------------------------------------------------------
Requisito: tener instalado Node.js (versión 18 o superior).

  1) Abrir una terminal dentro de la carpeta del proyecto.
  2) Instalar las dependencias (solo la primera vez):

         npm install

  3) Iniciar en modo desarrollo:

         npm run dev

     Se abrirá en la dirección que indique la terminal (normalmente
     http://localhost:5173).

  Otros comandos:
         npm run build      Genera la versión final en la carpeta "dist".
         npm run preview    Previsualiza esa versión final.


4. ESTRUCTURA DE CARPETAS
--------------------------------------------------------------------------------
  LA-MESA---RESTAURANTE-main/
  |
  |-- index.html            Página base. Define el idioma (es), el color del
  |                         navegador en móviles (#C2410C), el título
  |                         "La Mesa · Reservas" y el icono de la pestaña.
  |-- package.json         Nombre, scripts y librerías del proyecto.
  |-- vite.config.js       Configuración de Vite (plugin de React y base './').
  |
  |-- public/img/          Todas las imágenes (logo, platos, banners).
  |
  `-- src/
      |-- main.jsx         Punto de entrada. Carga estilos y monta la app.
      |-- App.jsx          Mapa de rutas (qué pantalla va en cada dirección).
      |-- styles.css       Todo el diseño visual y las animaciones.
      |
      |-- data/datos.js    Datos de ejemplo (platos, horarios, mesas, etc.).
      |-- hooks/           Lógica reutilizable de animación.
      |-- components/      Piezas reutilizables de la interfaz.
      `-- pages/           Pantallas completas.
          `-- admin/       Pantallas del panel de administración.


5. LA ARQUITECTURA POR CAPAS (QUÉ HACE CADA UNA)
--------------------------------------------------------------------------------
El proyecto está organizado en capas. Cada capa tiene una responsabilidad
clara, lo que facilita entenderlo, mantenerlo y ampliarlo.

  CAPA 1 · ARRANQUE Y CONFIGURACIÓN
  ---------------------------------
  index.html, vite.config.js, package.json, src/main.jsx
    - index.html: contiene un <div id="root"> donde React dibuja toda la app.
    - main.jsx: carga Bootstrap, la fuente Inter y styles.css, y monta el
      componente principal <App /> en modo estricto (React.StrictMode).
    - vite.config.js: activa React y define la ruta base relativa.
    - package.json: lista las librerías y los comandos (dev, build, preview).

  CAPA 2 · NAVEGACIÓN (RUTAS)
  ---------------------------
  src/App.jsx
    Define qué pantalla se muestra en cada dirección y con qué "marco"
    (layout). Hay dos zonas:

    ZONA CLIENTE (usa ClienteLayout: barra superior + pie de página)
      /                       Inicio
      /login                  Ingreso de clientes
      /reservar/fecha         Paso 1: fecha y número de personas
      /reservar/horarios      Paso 2: elegir horario
      /reservar/datos         Paso 3: datos del cliente
      /reservar/confirmacion  Reserva confirmada
      /mis-reservas           Consultar y cancelar reservas

    ZONA ADMINISTRACIÓN (usa AdminLayout: menú lateral + barra superior)
      /admin/login            Ingreso del personal
      /admin                  Calendario
      /admin/dia              Línea de tiempo del día
      /admin/nueva            Nueva reserva
      /admin/nueva/conflicto  Nueva reserva mostrando un error de conflicto
      /admin/reservas         Listado de reservas
      /admin/mesas            Mesas del restaurante
      /admin/perfil           Perfil de la administradora

    Cualquier dirección desconocida redirige automáticamente al Inicio.

  CAPA 3 · DATOS (CONTENIDO DE EJEMPLO)
  -------------------------------------
  src/data/datos.js
    Aquí viven todos los datos de muestra. Para cambiar un texto, plato,
    horario o mesa, se modifica este archivo sin tocar las pantallas:

    PLATOS       8 platos de la carta (ceviche, lomo saltado, anticuchos,
                 causa limeña, cuy chactado, pachamanca, juane amazónico,
                 rocoto relleno) con nombre, descripción e imagen.
    SLIDES       5 imágenes del carrusel principal del Inicio.
    BENEFICIOS   3 ventajas: Disponibilidad real, Confirmación inmediata,
                 Cancela fácil.
    PASOS        Los 3 pasos para reservar.
    HORAS        Horarios de Almuerzo (12:00-15:30) y Cena (19:00-22:00),
                 marcando cuáles están libres (1) u ocupados (0).
    CAL_OCT      Calendario de octubre 2026 (la semana empieza en lunes).
    HOY_DIA      Día "actual" simulado: 20.
    DIA_SEL      Día seleccionado por defecto: 24.
    DIAS_LLENOS  Días sin cupo (el 27).
    RES_POR_DIA  Cantidad de reservas por día, para el panel admin.
    RESERVAS     Reservas de ejemplo del listado administrativo.
    DIA_LISTA    Reservas de ejemplo del día seleccionado.
    MESAS        8 mesas con su capacidad (2, 4 o 6 personas). La mesa 4
                 está bloqueada.
    TIMELINE     Bloques de reserva de cada mesa para la línea de tiempo.

  CAPA 4 · HOOKS (LÓGICA DE ANIMACIÓN)
  ------------------------------------
  src/hooks/useAnimacion.jsx
    Piezas reutilizables que solo se encargan de la presentación:
    - useReveal:      detecta cuándo un elemento entra en pantalla al hacer
                      scroll (usa IntersectionObserver).
    - <Reveal>:       envuelve cualquier contenido para que aparezca con
                      animación al llegar a la vista. Admite retraso
                      (delay) y tipo de entrada.
    - <NumeroAnimado>: muestra un número que sube de 0 hasta su valor final
                      (usado en los indicadores del panel admin).

  CAPA 5 · COMPONENTES REUTILIZABLES
  ----------------------------------
  src/components/

    ui.jsx  (piezas pequeñas de uso general)
      - img():             construye la ruta correcta de cada imagen.
      - <Logo>:            logotipo de La Mesa con altura configurable.
      - <EstadoBadge>:     etiqueta de color para el estado de una reserva
                           (Confirmada, Pendiente, Cancelada).
      - <ModalConfirmar>:  ventana emergente de confirmación (por ejemplo,
                           "¿Cancelar tu reserva?"). Es solo visual: sus
                           botones cierran la ventana.
      - <ContadorPersonas>: selector con botones − y + (de 1 a 8 personas).
      - <Foto>:            imagen con proporción fija, carga diferida y
                           efecto de zoom al pasar el mouse.

    Layouts.jsx  (los "marcos" de las pantallas)
      - <ClienteLayout>:   barra superior fija (Reservar, Mis reservas,
                           Ingresar) que cambia de aspecto al hacer scroll,
                           más el pie de página con dirección, horarios y
                           acceso a administración.
      - <Paso>:            contenedor de cada paso de reserva: título, botón
                           "Atrás", barra de progreso animada ("Paso X de 3")
                           y foto lateral decorativa.
      - <AdminLayout>:     menú lateral oscuro (Calendario, Reservas, Mesas,
                           Perfil), botón "+ Nueva reserva" y usuario
                           "Carla R.".
      - <TituloAdmin>:     encabezado de las pantallas del admin.
      - <AvisoToast>:      aviso verde "Reserva guardada" que entra por la
                           esquina inferior derecha.

    Calendario.jsx
      Calendario de octubre 2026. En modo cliente, deshabilita los días
      pasados y los días llenos. En modo admin, muestra cuántas reservas hay
      cada día y permite ver solo la semana o el mes completo. Al elegir un
      día solo se resalta en pantalla.

    SelectorHorarios.jsx
      Cuadrícula de horas separada por Almuerzo y Cena. Distingue tres
      estados: Disponible, Ocupado (deshabilitado) y Seleccionado, con su
      leyenda de colores.

    TimelineDia.jsx
      Línea de tiempo del día: una fila por mesa y las horas de 12:00 a
      23:00 en horizontal. Cada reserva es un bloque de color (según su
      estado) con 90 minutos de duración. Marca la franja de cierre entre
      las 16:00 y las 19:00 y señala las mesas bloqueadas.

  CAPA 6 · PÁGINAS DEL CLIENTE
  ----------------------------
  src/pages/

    Inicio.jsx       Portada del restaurante, con estas secciones:
                     1. Carrusel de fotos de platos con transición suave.
                     2. Presentación: "Abierto hoy", horario y botones
                        "Reservar mesa" / "Mis reservas".
                     3. Tres tarjetas de beneficios.
                     4. Cinta de platos que se desplaza sin parar.
                     5. "Nuestra carta": los 8 platos con foto y texto.
                     6. "Reserva en 3 pasos".
                     7. Llamado final a la acción con foto de fondo.

    Login.jsx        Pantalla de ingreso. Sirve para cliente y para admin
                     (cambia según la propiedad "admin"). Es maquetado: el
                     botón "Ingresar" solo lleva a la siguiente pantalla,
                     sin validar usuario ni contraseña.

    Fechas.jsx       PASO 1. Calendario y selector de personas (hasta 8).
    Horarios.jsx     PASO 2. Selector de horarios libres.
    Datos.jsx        PASO 3. Formulario con resumen de la reserva, nombre,
                     teléfono, correo y comentario opcional.
    Confirmacion.jsx Check verde que se dibuja con animación, código de
                     reserva (RSV-4821), detalle de la reserva y botón
                     "Agregar a mi calendario" (abre Google Calendar con el
                     evento ya cargado). También lleva a "Mis reservas".
    MisReservas.jsx  Búsqueda por teléfono, lista de reservas con foto y
                     estado, y opción "Cancelar reserva" con ventana de
                     confirmación.

  CAPA 7 · PÁGINAS DE ADMINISTRACIÓN
  ----------------------------------
  src/pages/admin/

    AdminCalendario.jsx  Calendario con alternancia Semana / Mes, y a la
                         derecha el resumen del día (reservas, personas y
                         mesas libres con números animados), lista de
                         reservas y botón hacia la línea de tiempo.
    AdminDia.jsx         Línea de tiempo del día con la leyenda de estados.
                         Muestra el aviso "Reserva guardada" cuando se llega
                         desde el formulario de nueva reserva.
    AdminNueva.jsx       Formulario: cliente, teléfono, personas, fecha,
                         hora, mesa y estado. Con el modo "conflicto" muestra
                         el error "La mesa 5 ya tiene reserva de 19:30 a
                         21:00" y sugiere usar la Mesa 7.
    AdminLista.jsx       Tabla de reservas con filtros (buscar, fecha,
                         estado), acciones Editar / Cancelar, ventana de
                         confirmación y paginación.
    AdminMesas.jsx       Tarjetas de las 8 mesas con dibujo de sillas según
                         su capacidad y estado (Activa o Bloqueada).
    AdminPerfil.jsx      Tarjeta de perfil de la administradora.

  CAPA 8 · ESTILOS Y ANIMACIONES
  ------------------------------
  src/styles.css  (se carga después de Bootstrap para sobrescribirlo)
    Está dividido en secciones comentadas:
    - Variables y base:  colores, tipografía y curva de animación.
    - Botones y formularios, barra superior y pie, contenedores.
    - Estilos propios de cada pantalla (Inicio, Calendario, Horarios,
      Confirmación, Mis reservas, Login, Admin, Timeline).
    - Bloque final "animado": animaciones adicionales y mejoras visuales.
    - Accesibilidad: si el usuario tiene activado "reducir movimiento" en su
      dispositivo, las animaciones se desactivan automáticamente.

    Paleta de colores principal:
      Naranja terracota  #C2410C   (color de marca, botones y enlaces)
      Marrón oscuro      #1F1611   (menú lateral del admin)
      Crema              #FBF8F3   (secciones claras)
      Fondo general      #F9FAFC

    Animaciones incluidas (entre otras):
      - Aparición al hacer scroll (subir / entrar desde la izquierda).
      - Zoom lento tipo "Ken Burns" en el carrusel principal.
      - Cinta de platos en movimiento continuo (marquee).
      - Brillo que cruza los botones y latido suave en los botones de
        llamada a la acción.
      - Destello diagonal y zoom al pasar el mouse sobre las fotos.
      - Check de confirmación que se dibuja trazo a trazo.
      - Barra de progreso de los pasos que crece al entrar.
      - Sillas de las mesas que aparecen una a una.
      - Bloques de la línea de tiempo que entran escalonados.
      - Aviso (toast) y alerta de conflicto que entran con movimiento.
      - Transición suave al cambiar de pantalla.

  CAPA 9 · RECURSOS GRÁFICOS
  --------------------------
  public/img/
    Logos:         logo-01.png, logo-01.jpeg, icono.png (icono de pestaña
                   y avatar del admin).
    Platos:        ceviche, Lomo-Saltado, anticuchos, causa-limena, cuy,
                   pachamanca, Juane, rocoto_relleno.
    Beneficios:    real.jpg, reserva.jpg, pago.webp.


6. FLUJO DE USO (RECORRIDO SUGERIDO PARA LA DEMOSTRACIÓN)
--------------------------------------------------------------------------------
  COMO CLIENTE
    1. Entrar al Inicio y ver el carrusel, la carta y los beneficios.
    2. Pulsar "Reservar mesa".
    3. Paso 1: elegir el día en el calendario y el número de personas.
    4. Paso 2: elegir un horario disponible (los ocupados no se pueden
       seleccionar).
    5. Paso 3: revisar el resumen y completar los datos.
    6. Pulsar "Confirmar reserva" y ver la confirmación con el código.
    7. Opcional: "Agregar a mi calendario" o ir a "Mis reservas" para ver y
       cancelar reservas.

  COMO ADMINISTRADOR
    1. En el pie de página, pulsar "Acceso administración" (o ir a
       /#/admin/login) y pulsar "Ingresar" (no pide credenciales reales).
    2. En el Calendario, alternar entre Semana y Mes y revisar el resumen
       del día.
    3. Abrir "Ver línea de tiempo del día" para ver las mesas y sus horas.
    4. Ir a "+ Nueva reserva", completar el formulario y pulsar "Guardar"
       (aparece el aviso "Reserva guardada").
    5. Pulsar "Ver ejemplo de conflicto" para ver cómo se muestra un error
       de mesa ocupada.
    6. Revisar "Reservas" (filtros, tabla, cancelar) y "Mesas".


7. DATOS DE NEGOCIO QUE REFLEJA EL PROTOTIPO
--------------------------------------------------------------------------------
  - Horario de atención: lunes a domingo, 12:00-16:00 y 19:00-23:00.
  - Máximo 8 comensales por reserva.
  - Capacidad de mesas: 2, 4 o 6 personas (8 mesas en total).
  - Estados de una reserva: Confirmada, Pendiente, Cancelada.
  - Cada reserva ocupa una mesa durante unos 90 minutos.
  - El sistema impide reservar horarios ocupados y avisa cuando hay
    conflicto de mesa.
  - Código de reserva con formato RSV-0000.


8. LIMITACIONES ACTUALES (LO QUE FALTA PARA SER UN SISTEMA REAL)
--------------------------------------------------------------------------------
  - No hay base de datos ni servidor: nada se guarda de forma permanente.
  - Los formularios no validan información ni envían datos.
  - El inicio de sesión no comprueba usuario ni contraseña.
  - El calendario muestra únicamente octubre 2026; los botones de mes
    anterior/siguiente son decorativos.
  - La fecha "de hoy" está fijada en el día 20 de octubre.
  - Los filtros, la búsqueda y la paginación del panel admin son visuales.
  - No se envían correos ni mensajes de confirmación.

  Siguiente paso recomendado: conectar un servidor (API) y una base de datos
  para guardar reservas, clientes y mesas, y agregar autenticación real.


9. CÓMO PERSONALIZAR
--------------------------------------------------------------------------------
  - Cambiar platos, horarios, mesas o reservas de ejemplo:
        src/data/datos.js
  - Cambiar colores, fuentes o animaciones:
        src/styles.css  (variables al inicio del archivo, en :root)
  - Cambiar imágenes: reemplazar los archivos de public/img/ conservando el
    mismo nombre, o actualizar el nombre en datos.js.
  - Agregar una pantalla nueva:
        1) Crear el archivo en src/pages/
        2) Registrar su ruta en src/App.jsx


================================================================================
  La Mesa · Prototipo de reservas · React + Vite + Bootstrap
================================================================================
