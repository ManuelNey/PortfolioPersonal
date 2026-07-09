import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Lightbox.css';

export default function Lightbox({ shot, counter, footer, onPrev, onNext, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.label} onClick={onClose}>
      <div className="lightbox-shell" onClick={(event) => event.stopPropagation()}>
        <div className="lightbox-topbar">
          <div className="lightbox-title">
            <span>{shot.label}</span>
            <small>{counter}</small>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar imagen" className="lightbox-close">
            ✕
          </button>
        </div>

        <div className="lightbox-stage">
          <button type="button" onClick={onPrev} aria-label="Captura anterior" className="lightbox-arrow lightbox-arrow--prev">
            ‹
          </button>
          <img src={shot.src} alt={shot.label} className="lightbox-img" />
          <button type="button" onClick={onNext} aria-label="Captura siguiente" className="lightbox-arrow lightbox-arrow--next">
            ›
          </button>
        </div>

        <div className="lightbox-footer">
          <span>{footer}</span>
          <span>{counter}</span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
