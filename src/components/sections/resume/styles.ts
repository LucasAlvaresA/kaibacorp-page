import styled, { keyframes } from 'styled-components';

interface IProps {
  isOpen: boolean;
}

const heroIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.5rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const marquee = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(75% 80% at 86% 18%, rgba(134, 223, 224, 0.8) 0%, rgba(134, 223, 224, 0) 58%),
    radial-gradient(65% 90% at 6% 92%, rgba(4, 24, 38, 0.6) 0%, rgba(4, 24, 38, 0) 66%),
    linear-gradient(118deg, #07305a 0%, #135d9c 48%, #4fa9c9 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
    background-size: clamp(4rem, 5vw, 5.5rem) clamp(4rem, 5vw, 5.5rem);
    -webkit-mask-image: radial-gradient(120% 90% at 72% 22%, #000 0%, transparent 72%);
    mask-image: radial-gradient(120% 90% at 72% 22%, #000 0%, transparent 72%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -22%;
    right: 14%;
    width: 38rem;
    height: 38rem;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.14) 0%, transparent 68%);
    filter: blur(20px);
    pointer-events: none;
  }
`;

export const Header = styled.header<IProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 12;
  height: clamp(5rem, 9vh, 6.5rem);
  padding: 0 var(--gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;
    animation: ${heroIn} 0.9s var(--ease-out) both;
  }

  .brand-mark {
    width: 2.65rem;
    height: 2.65rem;
    object-fit: contain;
    filter: drop-shadow(0 8px 18px rgba(2, 16, 28, 0.28));
  }

  .brand-name {
    color: var(--white);
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    white-space: nowrap;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    margin-left: auto;
    animation: ${heroIn} 0.9s var(--ease-out) 0.25s both;
  }

  .contact {
    height: 2.9rem;
    padding: 0 1.15rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.55rem;
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    color: var(--white);
    background: rgba(4, 24, 38, 0.28);
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    backdrop-filter: blur(12px);
    transition:
      background 0.3s var(--ease-out),
      color 0.3s var(--ease-out),
      border-color 0.3s var(--ease-out),
      transform 0.3s var(--ease-out);
  }

  .contact span {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1;
    transition: transform 0.3s var(--ease-out);
  }

  .contact:hover {
    color: var(--primary-strong);
    background: var(--white);
    border-color: var(--white);
    transform: translateY(-1px);
  }

  .contact:hover span {
    transform: translate(2px, -2px);
  }

  @media (max-width: 900px) {
    height: 5rem;

    .actions {
      display: none;
    }
  }

  @media (max-width: 420px) {
    gap: 1rem;

    .brand {
      gap: 0.6rem;
    }

    .brand-mark {
      width: 2.3rem;
      height: 2.3rem;
    }

    .brand-name {
      font-size: 1rem;
    }
  }
`;

export const Hero = styled.section`
  position: relative;
  z-index: 1;
  flex: 1;
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: clamp(7.5rem, 15vh, 10rem) var(--gutter) clamp(3rem, 6vh, 4.5rem);
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
  align-items: center;
  gap: clamp(1rem, 4vw, 4.5rem);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-top: 7.5rem;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 38rem;
`;

export const Title = styled.div`
  animation: ${heroIn} 1s var(--ease-out) 0.06s both;

  h1 {
    color: var(--white);
    font-size: clamp(2.85rem, 5.15vw, 5.15rem);
    font-weight: 600;
    line-height: 0.99;
    letter-spacing: -0.045em;
    text-wrap: balance;
    text-shadow: 0 18px 40px rgba(3, 23, 40, 0.12);
  }

  span {
    display: inline-block;
    color: var(--light-blue);
  }

  @media (max-width: 980px) {
    h1 {
      font-size: clamp(2.8rem, 7.7vw, 4.4rem);
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: clamp(2.55rem, 11.5vw, 3.4rem);
    }
  }
`;

export const Description = styled.p`
  max-width: 39ch;
  margin-top: clamp(1.5rem, 3vh, 2rem);
  color: rgba(234, 247, 255, 0.78);
  font-size: clamp(0.98rem, 1.05vw, 1.075rem);
  line-height: 1.8;
  animation: ${heroIn} 1s var(--ease-out) 0.22s both;

  @media (max-width: 980px) {
    max-width: 46ch;
    margin-top: 1.25rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: clamp(1.9rem, 4vh, 2.75rem);
  animation: ${heroIn} 1s var(--ease-out) 0.36s both;

  a {
    min-height: 3.25rem;
    padding: 0 1.4rem;
    border-radius: 0.55rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    transition:
      background 0.3s var(--ease-out),
      color 0.3s var(--ease-out),
      border-color 0.3s var(--ease-out),
      transform 0.3s var(--ease-out),
      box-shadow 0.3s var(--ease-out);
  }

  .action-icon {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1;
    transition: transform 0.3s var(--ease-out);
  }

  .primary_button {
    color: var(--primary-strong);
    background: var(--white);
    box-shadow: 0 18px 40px -20px rgba(2, 20, 36, 0.8);
  }

  .primary_button:hover {
    color: var(--ink);
    background: var(--light-blue);
    transform: translateY(-2px);
    box-shadow: 0 22px 46px -20px rgba(2, 20, 36, 0.9);
  }

  .primary_button:hover .action-icon {
    transform: translate(2px, -2px);
  }

  .secondary_button {
    color: var(--white);
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }

  .secondary_button:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }

  .secondary_button:hover .action-icon {
    transform: translateY(2px);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;

    a {
      width: 100%;
    }
  }
`;

export const Visual = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${heroIn} 1.1s var(--ease-out) 0.18s both;

  .halo {
    position: absolute;
    bottom: 8%;
    left: 50%;
    width: min(34rem, 90%);
    aspect-ratio: 1;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(134, 223, 224, 0.5) 0%,
      rgba(134, 223, 224, 0.14) 38%,
      transparent 68%
    );
    filter: blur(10px);
    pointer-events: none;
  }

  .orbit {
    position: absolute;
    left: 50%;
    bottom: 7%;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .orbit-one {
    width: min(30rem, 84%);
    aspect-ratio: 1;
  }

  .orbit-two {
    width: min(23rem, 65%);
    aspect-ratio: 1;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .watermark {
    position: absolute;
    top: 2%;
    left: 50%;
    width: min(32rem, 100%);
    height: auto;
    transform: translateX(-50%);
    opacity: 0.09;
    filter: brightness(0) invert(1);
    pointer-events: none;
  }

  .portrait {
    position: relative;
    z-index: 2;
    width: clamp(20rem, 34vw, 32rem);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 30px 46px rgba(2, 18, 32, 0.36));
  }

  @media (max-width: 980px) {
    .portrait {
      width: clamp(17rem, 52vw, 25rem);
    }

    .halo {
      width: min(26rem, 82%);
    }

    .orbit-one {
      width: min(24rem, 74%);
    }

    .orbit-two {
      width: min(18rem, 56%);
    }

    .watermark {
      width: min(26rem, 90%);
    }
  }

  @media (max-width: 480px) {
    .portrait {
      width: min(19rem, 78vw);
    }
  }
`;

export const ClientsBar = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  align-items: center;
  gap: clamp(1.25rem, 3.5vw, 3rem);
  padding: 1.15rem var(--gutter);
  background: linear-gradient(
    180deg,
    rgba(4, 24, 38, 0.04) 0%,
    rgba(4, 24, 38, 0.9) 58%,
    var(--ink) 100%
  );
  border-top: 1px solid rgba(255, 255, 255, 0.14);

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding-block: 1.35rem;
  }
`;

export const ClientsLabel = styled.span`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: rgba(224, 242, 252, 0.55);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: var(--light-blue);
    box-shadow: 0 0 12px rgba(134, 223, 224, 0.9);
  }
`;

export const Marquee = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);

  @media (max-width: 720px) {
    width: 100%;
    flex: none;
  }
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${marquee} 42s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MarqueeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 3.5rem);
  padding-right: clamp(2rem, 4vw, 3.5rem);

  img {
    width: auto;
    height: 2.4rem;
    object-fit: contain;
    opacity: 0.55;
    filter: brightness(0) invert(1);
    transition:
      opacity 0.3s ease,
      transform 0.3s var(--ease-out);
  }

  img:hover {
    opacity: 1;
    transform: scale(1.06);
  }
`;
