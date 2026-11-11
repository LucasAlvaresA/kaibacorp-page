import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when an element enters the viewport. Used to orchestrate the
 * page's scroll reveals without adding a runtime animation dependency.
 */
export function useInView<T extends HTMLElement>(): {
  ref: React.RefObject<T>;
  inView: boolean;
} {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
