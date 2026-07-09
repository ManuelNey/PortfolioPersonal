import './BackgroundHud.css';

export default function BackgroundHud({ hudGrid = true }) {
  return (
    <>
      {hudGrid && (
        <>
          <div className="hud-grid" />
          <div className="hud-glow" />
        </>
      )}
      <div className="float-dot" style={{ top: '12%', left: '6%', width: 5, height: 5, background: '#63C74D', opacity: 0.35, animationDelay: '0s', animationDuration: '7s' }} />
      <div className="float-dot" style={{ top: '64%', left: '11%', width: 3, height: 3, background: '#B8E85E', opacity: 0.3, animationDelay: '1s', animationDuration: '9s' }} />
      <div className="float-dot" style={{ top: '30%', right: '8%', width: 4, height: 4, background: '#63C74D', opacity: 0.3, animationDelay: '2s', animationDuration: '8s' }} />
      <div className="float-dot" style={{ top: '78%', right: '14%', width: 3, height: 3, background: '#B8E85E', opacity: 0.25, animationDelay: '.5s', animationDuration: '10s' }} />
    </>
  );
}
