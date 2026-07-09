import SectionHead from './SectionHead';
import { analisisItems } from '../data/analisisItems';
import './Analisis.css';

export default function Analisis() {
  return (
    <section id="analisis" className="analisis reveal-on-scroll">
      <SectionHead title="Análisis, diseño de software y bases de datos" mb={20} />
      <div className="analisis-intro">
        <p>
          Antes de programar, aprendí a entender bien el problema: relevar requerimientos, hablar con usuarios e
          interesados, y transformar esa información en una solución clara. También a modelar bases de datos
          desde cero — del MER a las tablas relacionales — entendiendo cómo se organiza la información de un
          sistema.
        </p>
        <p>
          En el día a día, eso significa que no solo escribo código: diseño soluciones que tienen sentido, son
          mantenibles y responden a lo que el usuario realmente necesita.
        </p>
      </div>
      <div className="analisis-grid">
        {analisisItems.map((item) => (
          <div className="analisis-item" key={item.label}>
            <span className="analisis-icon">{item.icon}</span>
            <span className="analisis-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
