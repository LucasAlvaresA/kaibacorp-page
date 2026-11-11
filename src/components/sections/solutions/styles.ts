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
  padding: clamp(5.5rem, 9vw, 8.5rem) var(--gutter) clamp(6rem, 10vw, 9rem);
  color: var(--ink);
  background: var(--paper);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: radial-gradient(circle, rgba(9, 42, 70, 0.16) 1px, transparent 1px);
    background-size: 22px 22px;
    -webkit-mask-image: linear-gradient(180deg, #000 0%, transparent 48%);
    mask-image: linear-gradient(180deg, #000 0%, transparent 48%);
    opacity: 0.45;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    right: -18rem;
    top: 12%;
    z-index: 0;
    width: 46rem;
    height: 46rem;
    background: url(${logo}) center / contain no-repeat;
    opacity: 0.035;
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
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.48fr);
  align-items: start;
  gap: clamp(3rem, 6vw, 7rem);

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: clamp(2.5rem, 5vw, 3.5rem);
  }
`;

export const Intro = styled.div``;

export const Index = styled.span`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  color: var(--primary);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;

  &::after {
    content: '';
    width: clamp(1.5rem, 3vw, 3rem);
    height: 1px;
    background: rgba(9, 42, 70, 0.22);
  }
`;

export const Title = styled.h2`
  max-width: 14ch;
  margin-top: 1.4rem;
  color: var(--ink);
  font-size: clamp(2.4rem, 4.1vw, 3.9rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.04em;
  text-wrap: balance;

  @media (max-width: 1000px) {
    max-width: 20ch;
    font-size: clamp(2.3rem, 6.8vw, 3.2rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 9.5vw, 2.5rem);
  }
`;

export const MainText = styled.p`
  max-width: 42ch;
  margin-top: 1.65rem;
  color: var(--slate);
  font-size: 1rem;
  line-height: 1.8;

  @media (max-width: 1000px) {
    max-width: 62ch;
  }
`;

export const CardsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(2rem, 4vw, 3.5rem);
  border-top: 1px solid var(--line-light);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  position: relative;
  padding: clamp(1.75rem, 3vw, 2.4rem) 0;
  border-bottom: 1px solid var(--line-light);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 1px;
    background: var(--primary);
    transition: width 0.5s var(--ease-out);
  }

  &:hover::after {
    width: 100%;
  }

  &:hover svg {
    transform: translateY(-1px);
  }
`;

export const IconArea = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid rgba(9, 42, 70, 0.08);
  border-radius: 0.6rem;
  display: grid;
  place-items: center;
  color: var(--primary);
  background: var(--white);
  box-shadow: 0 14px 26px -22px rgba(9, 42, 70, 0.55);
  font-size: 1.35rem;
  transition:
    background 0.3s var(--ease-out),
    color 0.3s var(--ease-out),
    border-color 0.3s var(--ease-out),
    transform 0.3s var(--ease-out);

  svg {
    transition: transform 0.3s var(--ease-out);
  }

  ${Card}:hover & {
    color: var(--white);
    background: var(--primary);
    border-color: var(--primary);
    transform: translateY(-2px);
  }
`;

export const CardTitleArea = styled.h3`
  max-width: 26ch;
  margin-top: 1.25rem;
  color: var(--ink);
  font-size: clamp(1.08rem, 1.35vw, 1.2rem);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.015em;
  transition: color 0.3s var(--ease-out);

  ${Card}:hover & {
    color: var(--primary-strong);
  }
`;

export const CardText = styled.p`
  max-width: 39ch;
  margin-top: 0.7rem;
  color: var(--slate);
  font-size: 0.925rem;
  line-height: 1.72;
`;
