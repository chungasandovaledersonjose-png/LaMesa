// Hooks de animación (solo presentación).
import { useEffect, useRef, useState } from 'react';

/** Marca el elemento como visible cuando entra en pantalla (animación de aparición). */
export function useReveal(umbral = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) { setVisible(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: umbral });
    io.observe(el);
    return () => io.disconnect();
  }, [umbral]);
  return [ref, visible];
}

/** Envuelve contenido con animación de entrada al hacer scroll. */
export function Reveal({ children, delay = 0, tipo = 'up', className = '', as: Tag = 'div', ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`reveal reveal-${tipo} ${visible ? 'visible' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

/** Número que sube de 0 al valor final. */
export function NumeroAnimado({ valor, duracion = 1100 }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf; const t0 = performance.now();
    const paso = (t) => { const p = Math.min(1, (t - t0) / duracion); setN(Math.round(valor * (1 - (1 - p) ** 3))); if (p < 1) raf = requestAnimationFrame(paso); };
    raf = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(raf);
  }, [valor, duracion]);
  return <>{n}</>;
}
