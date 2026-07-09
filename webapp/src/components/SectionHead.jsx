import './SectionHead.css';

export default function SectionHead({ title, mb = 26 }) {
  return (
    <div className="section-head" style={{ marginBottom: mb }}>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" />
    </div>
  );
}
