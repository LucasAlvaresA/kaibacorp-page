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
  padding: clamp(5rem, 9vw, 8rem) var(--gutter) clamp(5.5rem, 10vw, 9rem);
  color: var(--white);
  background:
    radial-gradient(60% 70% at 88% 4%, rgba(32, 118, 192, 0.34) 0%, transparent 62%),
    radial-gradient(55% 60% at 4% 100%, rgba(134, 223, 224, 0.08) 0%, transparent 60%),
    var(--ink);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: clamp(4rem, 5vw, 5.5rem) clamp(4rem, 5vw, 5.5rem);
    -webkit-mask-image: radial-gradient(110% 80% at 80% 0%, #000 0%, transparent 72%);
    mask-image: radial-gradient(110% 80% at 80% 0%, #000 0%, transparent 72%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    right: -7rem;
    bottom: -12rem;
    z-index: 0;
    width: 34rem;
    height: 34rem;
    background: url(${logo}) center / contain no-repeat;
    filter: brightness(0) invert(1);
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
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: clamp(3rem, 6vw, 5rem);
`;

export const Index = styled.span`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding-top: 0.55rem;
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
  max-width: 22ch;
  color: var(--white);
  font-size: clamp(2.35rem, 4.2vw, 3.9rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.04em;
  text-wrap: balance;

  span {
    color: rgba(178, 215, 229, 0.58);
    font-weight: 400;
  }

  @media (max-width: 900px) {
    font-size: clamp(2.2rem, 7vw, 3.1rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 9.5vw, 2.5rem);
  }
`;

export const StrongTitle = styled.span`
  color: inherit;
  font: inherit;
  font-weight: 600;
`;

export const CardsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid rgba(255, 255, 255, 0.16);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    border-top: 0;
  }
`;

export const Card = styled.article`
  position: relative;
  min-height: 15.5rem;
  padding: 2.2rem clamp(1.15rem, 2.2vw, 2rem) 0.25rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.4s var(--ease-out);

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: 0;
  }

  &:hover {
    background: linear-gradient(180deg, rgba(134, 223, 224, 0.055), transparent 80%);
  }

  &:hover .card-rule {
    width: 100%;
    background: var(--light-blue);
  }

  @media (max-width: 900px) {
    min-height: 0;
    padding: 2rem 0;
    border-right: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    &:first-child {
      border-top: 0;
    }
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: clamp(2rem, 4vw, 2.8rem);

  .card-index {
    color: var(--light-blue);
    font-family: var(--font-mono);
    font-size: 0.66rem;
    font-weight: 500;
    letter-spacing: 0.18em;
  }

  .card-rule {
    width: 2.25rem;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    transition:
      width 0.5s var(--ease-out),
      background 0.5s var(--ease-out);
  }
`;

export const CardTitleArea = styled.h3`
  max-width: 20ch;
  color: var(--white);
  font-size: clamp(1.25rem, 1.65vw, 1.55rem);
  font-weight: 600;
  line-height: 1.22;
  letter-spacing: -0.02em;

  em {
    color: var(--light-blue);
    font-style: normal;
  }

  @media (max-width: 900px) {
    max-width: 28ch;
  }
`;

export const CardText = styled.p`
  max-width: 34ch;
  margin-top: 1rem;
  color: rgba(216, 236, 248, 0.62);
  font-size: 0.93rem;
  line-height: 1.75;
`;
