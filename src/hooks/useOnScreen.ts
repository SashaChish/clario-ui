import { useEffect, useMemo, useState } from 'react';

export default function useOnScreen(element) {
  const [isIntersecting, setIntersecting] = useState(false);

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: '48px',
      threshold: 1,
    }),
    [],
  );

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options),
    [options],
  );

  useEffect(() => {
    if (!element) return undefined;

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, observer]);

  return isIntersecting;
}
