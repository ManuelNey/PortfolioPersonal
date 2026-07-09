import SectionHead from './SectionHead';
import './Sobre.css';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre reveal-on-scroll">
      <SectionHead title="Sobre mí" />
      <div className="sobre-grid">
        <div className="sobre-text">
          <p>
            Soy estudiante de Ingeniería en Informática en la Universidad Católica del Uruguay, actualmente
            cursando tercer año. Me interesa especialmente el desarrollo backend, full stack y la arquitectura de
            software.
          </p>
          <p>
            Durante mi formación académica he trabajado en proyectos que incluyen APIs REST, aplicaciones web,
            sistemas cliente-servidor, autenticación con JWT, bases de datos relacionales y uso de Docker. Me
            considero una persona responsable, con ganas de aprender y seguir creciendo profesionalmente.
          </p>
          <p>
            Actualmente busco mi primera experiencia laboral en el área de desarrollo de software, donde pueda
            aplicar mis conocimientos, fortalecer mis habilidades técnicas y aportar valor dentro de un equipo de
            trabajo.
          </p>
        </div>
        <div className="sobre-meta">
          <span>
            <span className="meta-key">Carrera:</span> Ingeniería en Informática
          </span>
          <span>
            <span className="meta-key">Etapa:</span> 3er año
          </span>
          <span>
            <span className="meta-key">Intereses:</span> backend y full stack
          </span>
          <span>
            <span className="meta-key">Ubicación:</span> Montevideo, Uruguay
          </span>
        </div>
      </div>
    </section>
  );
}
