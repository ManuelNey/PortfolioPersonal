import { useCallback, useRef, useState } from 'react';
import { categories } from '../data/categories';
import { useSfx } from './useSfx';

export function useStackWheel() {
  const [active, setActive] = useState(0);
  const [rot, setRot] = useState(0);
  const activeRef = useRef(0);
  const rotRef = useRef(0);
  const playBeep = useSfx();

  const selectCat = useCallback(
    (i) => {
      if (i === activeRef.current) return;
      const target = -i * 72;
      const delta = (((target - rotRef.current) % 360) + 540) % 360 - 180;
      const newRot = rotRef.current + delta;
      playBeep('/uploads/omnitrix-beep-corto.wav', 0.35);
      activeRef.current = i;
      rotRef.current = newRot;
      setActive(i);
      setRot(newRot);
    },
    [playBeep],
  );

  const explorarSkills = useCallback(() => {
    let i = 1;
    const cycle = setInterval(() => {
      selectCat(i % categories.length);
      i++;
      if (i > categories.length) clearInterval(cycle);
    }, 700);
  }, [selectCat]);

  return { active, rot, selectCat, explorarSkills };
}
