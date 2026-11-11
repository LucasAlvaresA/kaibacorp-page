import { css } from 'styled-components';

/**
 * Shared, dependency-free scroll reveal. Elements opt in with `.reveal`
 * and can stagger themselves with `.reveal-1` … `.reveal-5` or an inline
 * `transitionDelay`.
 */
export const revealBase = css`
  .reveal {
    opacity: 0;
    transform: translateY(1.5rem);
    transition:
      opacity 0.8s var(--ease-out),
      transform 0.8s var(--ease-out);
    will-change: opacity, transform;
  }

  .reveal-1 {
    transition-delay: 0.07s;
  }

  .reveal-2 {
    transition-delay: 0.14s;
  }

  .reveal-3 {
    transition-delay: 0.21s;
  }

  .reveal-4 {
    transition-delay: 0.28s;
  }

  .reveal-5 {
    transition-delay: 0.35s;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
`;

export const revealVisible = css`
  .reveal {
    opacity: 1;
    transform: none;
  }
`;
