import { scrollTo } from '../utils/scrollTo';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-dot" />
        <span className="nav-logo">MC://CABRERA</span>
      </div>
      <div className="nav-links">
        <button onClick={() => scrollTo('sobre')} className="nav-btn">SOBRE MÍ</button>
        <button onClick={() => scrollTo('stack')} className="nav-btn">STACK</button>
        <button onClick={() => scrollTo('proyectos')} className="nav-btn">PROYECTOS</button>
        <button onClick={() => scrollTo('contacto')} className="nav-btn nav-btn--cta">CONTACTO</button>
      </div>
    </nav>
  );
}
