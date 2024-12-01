import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export const useReducedMotion = () => {
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)'
  );
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    setShouldReduceMotion(prefersReducedMotion || window.innerWidth < 768);
  }, [prefersReducedMotion]);

  return shouldReduceMotion;
}; 