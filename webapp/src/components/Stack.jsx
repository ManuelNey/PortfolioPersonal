import { useMemo } from 'react';
import SectionHead from './SectionHead';
import IconTech from './IconTech';
import { categories } from '../data/categories';
import { withLogos } from '../utils/logoFor';
import './Stack.css';

export default function Stack({ active, rot, selectCat }) {
  const cat = categories[active];

  const wheelNodes = useMemo(
    () =>
      categories.map((c, i) => {
        const angle = ((-90 + i * 72) * Math.PI) / 180;
        const r = 40;
        const sel = i === active;
        return {
          name: c.name,
          iconPath: c.iconPath,
          left: `${50 + r * Math.cos(angle)}%`,
          top: `${50 + r * Math.sin(angle)}%`,
          sel,
        };
      }),
    [active],
  );

  const activeTechs = withLogos(cat.techs);

  return (
    <section id="stack" className="stack reveal-on-scroll">
      <SectionHead title="Stack tecnológico" mb={12} />
      <p className="stack-intro">Estas son las principales tecnologías con las que desarrollo mis proyectos.</p>

      <div className="stack-layout">
        <div className="wheel">
          <div className="wheel-ring-dashed" />
          <div className="wheel-ring-inner" />

          <div className="wheel-hub">
            <span className="wheel-hub-icon">
              <IconTech path={cat.iconPath} size={26} glow />
            </span>
            <span className="wheel-hub-name">{cat.name}</span>
            <span className="wheel-hub-count">{cat.techs.length} TECNOLOGÍAS</span>
          </div>

          <div className="wheel-selector">
            <span className="wheel-selector-label">SEL</span>
            <span className="wheel-selector-arrow" />
          </div>

          <div className="wheel-nodes" style={{ transform: `rotate(${rot}deg)` }}>
            {wheelNodes.map((node, i) => (
              <button
                key={node.name}
                onClick={() => selectCat(i)}
                aria-label={node.name}
                className={`wheel-node${node.sel ? ' wheel-node--active' : ''}`}
                style={{ left: node.left, top: node.top }}
              >
                <span className="wheel-node-inner" style={{ transform: `rotate(${-rot}deg)` }}>
                  <span className="wheel-node-icon">
                    <IconTech path={node.iconPath} size={21} />
                  </span>
                  <span className="wheel-node-label">{node.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="stack-panel">
          <div className="stack-panel-head">
            <span className="stack-panel-dot" />
            TECNOLOGÍA ACTIVA :: {cat.name.toUpperCase()}
          </div>
          <div className="stack-chips">
            {activeTechs.map((tech) => (
              <span className="stack-chip" key={tech.label}>
                {tech.hasLogo && <img loading="lazy" src={tech.logo} alt="" className="stack-chip-logo" />}
                {tech.label}
              </span>
            ))}
          </div>
          <p className="stack-panel-desc">{cat.desc}</p>
        </div>
      </div>
    </section>
  );
}
