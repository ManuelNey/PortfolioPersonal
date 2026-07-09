import { useCallback, useState } from 'react';
import { useSfx } from './useSfx';

export function useProjectCarousel(shots) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const playSfx = useSfx();
  const n = shots.length;

  const prev = useCallback(
    (e) => {
      e?.stopPropagation();
      setIndex((i) => (i - 1 + n) % n);
    },
    [n],
  );

  const next = useCallback(
    (e) => {
      e?.stopPropagation();
      setIndex((i) => (i + 1) % n);
    },
    [n],
  );

  const open = useCallback(() => {
    playSfx('/uploads/ABRIR IMAGENES-cbea7442.mp3');
    setLightboxOpen(true);
  }, [playSfx]);

  const close = useCallback(() => {
    playSfx('/uploads/Cerrar imagen.mp3');
    setLightboxOpen(false);
  }, [playSfx]);

  return { shot: shots[index], index, n, lightboxOpen, prev, next, open, close };
}
