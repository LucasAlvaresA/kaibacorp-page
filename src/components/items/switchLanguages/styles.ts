import styled, { keyframes } from 'styled-components';

const Smooth = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  min-width: 8.375rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  filter: drop-shadow(-2px 2px 4px rgba(0, 0, 0, 0.25));

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;

    p {
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 150%;
      letter-spacing: 0.0025em;
      color: var(--gray5);
      margin-bottom: -0.25rem;
    }

    small {
      font-size: 0.75rem;
      line-height: 150%;
      letter-spacing: 0.0025em;
      color: var(--gray5);
    }
  }

  .arrow {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  .flag {
    width: 1.5rem;
    height: 1.125rem;
  }

  .cards {
    position: absolute;
    top: 2rem;
    right: 0;
    width: 28.125rem;
    display: grid;
    gap: 1rem;
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 8.375rem), 8.375rem));
    background-color: var(--white);
    z-index: -1;
    animation: ${Smooth} 0.3s;
  }
`;
