import { useRef, useCallback } from 'react';

export function useSfx() {
  const cache = useRef({});

  return useCallback((src, volume = 0.85) => {
    if (!cache.current[src]) {
      const audio = new Audio(src);
      audio.volume = volume;
      cache.current[src] = audio;
    }
    const audio = cache.current[src];
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, []);
}
