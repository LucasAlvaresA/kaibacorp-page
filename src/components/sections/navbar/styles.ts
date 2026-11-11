import styled, { keyframes } from 'styled-components';

interface IProps {
  isOpen: boolean;
}

const Drop = keyframes`
  from {
    transform: translateY(-100vh);
  }

  to {
    transform: none;
  }
`;

const Back = keyframes`
  from {
    transform: none;
  }

  to {
    transform: translateY(-100vh);
  }
`;

const Smooth = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

export const Container = styled.section<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8rem var(--gutter) 2.5rem;
  gap: 2.5rem;
  overflow-y: auto;
  background:
    radial-gradient(35rem 30rem at 82% 4%, rgba(32, 118, 192, 0.4) 0%, transparent 62%),
    radial-gradient(30rem 26rem at 6% 100%, rgba(134, 223, 224, 0.1) 0%, transparent 60%),
    var(--ink);
  z-index: 11;
  transform: translateY(-100vh);
  animation: ${({ isOpen }) => (isOpen ? Drop : Back)} ${({ isOpen }) => (isOpen ? '0.55s' : '0.2s')};
  animation-fill-mode: forwards;
  transition: transform 0.5s var(--ease-out);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 3.5rem 3.5rem;
    -webkit-mask-image: radial-gradient(110% 80% at 80% 0%, #000 0%, transparent 72%);
    mask-image: radial-gradient(110% 80% at 80% 0%, #000 0%, transparent 72%);
    pointer-events: none;
  }

  @media screen and (min-width: 901px) {
    display: none;
  }
`;

export const Grid = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2.75rem;
`;

export const BoxIdiom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    width: 100%;
    padding-bottom: 0.85rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    color: rgba(224, 242, 252, 0.55);
    font-family: var(--font-mono);
    font-size: 0.66rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    animation: ${Smooth} 0.45s var(--ease-out) 0.1s both;
  }
`;

export const BoxContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;

  p {
    color: var(--white);
    font-family: var(--font-display);
    font-size: clamp(2rem, 7vw, 2.6rem);
    font-weight: 600;
    line-height: 1.02;
    letter-spacing: -0.04em;
  }

  small {
    max-width: 28rem;
    color: rgba(222, 239, 250, 0.66);
    font-size: 0.94rem;
    line-height: 1.72;
  }

  a {
    width: 100%;
    max-width: 18rem;
    min-height: 3.15rem;
    margin-top: 0.5rem;
    border-radius: 0.55rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    color: var(--ink);
    background: var(--light-blue);
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.13em;
    box-shadow: 0 18px 36px -22px rgba(0, 0, 0, 0.8);
    transition:
      transform 0.3s var(--ease-out),
      background 0.3s var(--ease-out);

    &::after {
      content: '↗';
      font-family: var(--font-body);
      font-size: 1rem;
      transition: transform 0.3s var(--ease-out);
    }

    &:hover {
      background: var(--white);
      transform: translateY(-2px);
    }

    &:hover::after {
      transform: translate(2px, -2px);
    }
  }
`;
