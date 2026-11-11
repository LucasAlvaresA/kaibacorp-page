import styled, { keyframes } from 'styled-components';

const Smooth = keyframes`
  from {
    opacity: 0;
    transform: translateY(-0.35rem);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

export const Container = styled.div`
  position: relative;
  min-width: 11.5rem;
  height: 2.9rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.7rem;
  gap: 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 0.55rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition:
    background-color 0.3s var(--ease-out),
    border-color 0.3s var(--ease-out);

  &:hover,
  &:focus-within {
    background-color: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.38);
  }

  .flag {
    width: 1.4rem;
    height: 1.05rem;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(2, 20, 36, 0.3);
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;

    p {
      color: var(--white);
      font-size: 0.72rem;
      font-weight: 600;
      line-height: 1.35;
    }

    small {
      color: rgba(255, 255, 255, 0.62);
      font-size: 0.62rem;
      line-height: 1.35;
    }
  }

  .chevron {
    width: 1rem;
    height: 1rem;
    margin-left: auto;
    color: rgba(255, 255, 255, 0.7);
    transition: transform 0.3s var(--ease-out);
  }

  &[aria-expanded='true'] .chevron {
    transform: rotate(180deg);
  }

  .cards {
    position: absolute;
    top: calc(100% + 0.55rem);
    right: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 0.5rem;
    border-radius: 0.7rem;
    background-color: var(--white);
    box-shadow:
      0 30px 60px -24px rgba(2, 20, 35, 0.5),
      0 0 0 1px rgba(6, 28, 47, 0.06);
    z-index: 60;
    animation: ${Smooth} 0.25s var(--ease-out) both;
  }
`;
