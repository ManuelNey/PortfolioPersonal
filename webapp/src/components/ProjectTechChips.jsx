import { withLogos } from '../utils/logoFor';

export default function ProjectTechChips({ techs }) {
  return (
    <div className="project-chips">
      {withLogos(techs).map((t) => (
        <span className="project-chip" key={t.label}>
          {t.hasLogo && <img loading="lazy" src={t.logo} alt="" className="project-chip-logo" />}
          {t.label}
        </span>
      ))}
    </div>
  );
}
