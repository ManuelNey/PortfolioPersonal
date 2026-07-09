import { scrollTo } from '../utils/scrollTo';
import './Hero.css';

const SPIN_DUR = '23s';
const SPIN_DUR_SLOW = '41s';

export default function Hero({ onExplorarSkills }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-copy">
        <h1 className="hero-title">
          Manuel <span className="hero-title-accent">Cabrera</span>
        </h1>
        <p className="hero-role">Estudiante de Ingeniería en Informática | Desarrollador de Software</p>
        <p className="hero-desc">
          Me apasiona desarrollar soluciones de software que resuelvan problemas reales, combinando backend,
          frontend y bases de datos para crear sistemas completos, útiles y de calidad.
        </p>
        <div className="hero-actions">
          <button onClick={() => scrollTo('proyectos')} className="btn btn--solid">Ver proyectos</button>
          <button onClick={onExplorarSkills} className="btn btn--outline">◉ Explorar skills</button>
          <button onClick={() => scrollTo('contacto')} className="btn btn--ghost">Contactarme</button>
        </div>
        <div className="hero-links">
          <a href="https://github.com/ManuelNey" target="_blank" rel="noreferrer" className="hero-link">
            <span className="hero-link-arrow">▸</span>github.com/ManuelNey
          </a>
          <a href="https://www.linkedin.com/in/manuel-cabrera-7719353b0/" target="_blank" rel="noreferrer" className="hero-link">
            <span className="hero-link-arrow">▸</span>linkedin.com/in/manuel-cabrera
          </a>
        </div>
      </div>

      <div className="hero-core-wrap">
        <div className="hero-core">
          <div className="core-ring-dashed" style={{ animationDuration: SPIN_DUR }} />
          <div className="core-ring-conic" style={{ animationDuration: SPIN_DUR_SLOW }} />
          <div className="core-photo">
            <img src="/uploads/pasted-1783318804894-0.png" alt="Manuel Cabrera" />
            <div className="core-photo-shade" />
          </div>
          <div className="core-orbits">
            <span className="core-orb core-orb--top" />
            <span className="core-orb core-orb--right" />
            <span className="core-orb core-orb--bottom" />
            <span className="core-orb core-orb--left" />
          </div>
        </div>
      </div>
    </section>
  );
}
