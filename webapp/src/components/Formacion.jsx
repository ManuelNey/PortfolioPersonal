import SectionHead from './SectionHead';
import './Formacion.css';

export default function Formacion() {
  return (
    <section id="formacion" className="formacion reveal-on-scroll">
      <SectionHead title="Formación académica" mb={36} />
      <div className="timeline">
        <div className="timeline-rail">
          <div className="timeline-dot timeline-dot--active" />
          <div className="timeline-line" />
        </div>
        <div className="timeline-item">
          <div className="formacion-card">
            <span className="formacion-date">2024 — PRESENTE</span>
            <h3 className="formacion-title">Ingeniería en Informática</h3>
            <p className="formacion-place">Universidad Católica del Uruguay · Montevideo</p>
            <div className="formacion-badges">
              <span className="badge badge--accent">Promedio 5.53 / 6.00</span>
              <span className="badge">3er año en curso</span>
            </div>
          </div>
        </div>

        <div className="timeline-rail">
          <div className="timeline-dot" />
        </div>
        <div className="timeline-item">
          <div className="formacion-card formacion-card--simple">
            <span className="formacion-tag">EN</span>
            <div>
              <span className="formacion-lang">Idioma inglés</span>
              <span className="formacion-level">NIVEL B1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
