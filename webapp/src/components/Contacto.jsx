import { useState } from 'react';
import './Contacto.css';

export default function Contacto() {
  const [copied, setCopied] = useState(false);
  const emailParts = ['manuelcabrera1834', 'gmail', 'com'];

  const copyEmail = async () => {
    await navigator.clipboard.writeText(`${emailParts[0]}@${emailParts[1]}.${emailParts[2]}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contacto" className="contacto reveal-on-scroll">
      <h2 className="contacto-title">Contacto</h2>
      <p className="contacto-text">
        Estoy abierto a nuevas oportunidades donde pueda seguir aprendiendo, aportar desde lo que ya sé y crecer
        como desarrollador.
      </p>
      <p className="contacto-text">
        Me interesan especialmente roles junior, pasantías o proyectos relacionados con backend, full stack, bases
        de datos y diseño de software. Si creés que puedo sumar, podés escribirme.
      </p>
      <div className="contacto-actions">
        <button type="button" className="btn btn--solid contacto-copy" onClick={copyEmail} aria-live="polite">
          ✉ {copied ? 'Email copiado' : 'Copiar email'}
        </button>
        <a href="https://www.linkedin.com/in/manuel-cabrera-7719353b0/" target="_blank" rel="noreferrer" className="btn btn--outline-contact">LinkedIn</a>
        <a href="https://github.com/ManuelNey" target="_blank" rel="noreferrer" className="btn btn--outline-contact">GitHub</a>
        <span title="Placeholder — agregar CV" className="btn btn--dashed">
          ⬇ Descargar CV <span className="contacto-soon">(próximamente)</span>
        </span>
      </div>
      <div className="contacto-meta">
        <span>
          <span className="meta-key">▸</span> Montevideo, Uruguay
        </span>
        <span>
          <span className="meta-key">▸</span> Respuesta por email
        </span>
      </div>
    </section>
  );
}
