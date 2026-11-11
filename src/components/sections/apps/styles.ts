import styled from 'styled-components';
import logo from '../../../assets/logo.png';
import { revealBase, revealVisible } from '../../../styles/reveal';

interface IProps {
  $inView: boolean;
}

export const Container = styled.section<IProps>`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(5.5rem, 10vw, 9rem) var(--gutter);
  color: var(--white);
  background:
    radial-gradient(50% 60% at 18% 8%, rgba(134, 223, 224, 0.2) 0%, transparent 65%),
    radial-gradient(45% 55% at 92% 86%, rgba(32, 118, 192, 0.55) 0%, transparent 70%),
    linear-gradient(130deg, #051c2e 0%, #0a3a63 45%, #145d9c 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: clamp(4rem, 5vw, 5.5rem) clamp(4rem, 5vw, 5.5rem);
    -webkit-mask-image: radial-gradient(100% 90% at 20% 20%, #000 0%, transparent 68%);
    mask-image: radial-gradient(100% 90% at 20% 20%, #000 0%, transparent 68%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    right: -6rem;
    bottom: -14rem;
    z-index: 0;
    width: 38rem;
    height: 38rem;
    background: url(${logo}) center / contain no-repeat;
    filter: brightness(0) invert(1);
    opacity: 0.05;
    pointer-events: none;
  }

  ${revealBase}
  ${({ $inView }) => $inView && revealVisible}
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

export const Intro = styled.div``;

export const Index = styled.span`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  color: var(--light-blue);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;

  &::after {
    content: '';
    width: clamp(1.5rem, 3vw, 3rem);
    height: 1px;
    background: rgba(134, 223, 224, 0.35);
  }
`;

export const Title = styled.h2`
  max-width: 16ch;
  margin-top: 1.4rem;
  color: var(--white);
  font-size: clamp(2.5rem, 4.6vw, 4.35rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.045em;
  text-wrap: balance;

  @media (max-width: 900px) {
    max-width: 20ch;
    font-size: clamp(2.3rem, 7vw, 3.3rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2.1rem, 9.6vw, 2.6rem);
  }
`;

export const AppsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding-left: clamp(2rem, 4vw, 3.5rem);
  border-left: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 900px) {
    padding-top: 2rem;
    padding-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    border-left: 0;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DownloadButton = styled.img`
  width: clamp(10rem, 13vw, 12.25rem);
  height: auto;
  border-radius: 0.55rem;
  cursor: pointer;
  box-shadow: 0 20px 40px -24px rgba(0, 0, 0, 0.7);
  transition:
    transform 0.3s var(--ease-out),
    box-shadow 0.3s var(--ease-out);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 28px 52px -22px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 520px) {
    width: 12.25rem;
  }
`;
