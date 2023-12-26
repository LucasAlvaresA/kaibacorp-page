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
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.section<IProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 7.813rem 1rem 0;
  gap: 2rem;
  background: var(--gray1);
  z-index: 11;
  transform: translateY(-100vh);
  animation: ${({ isOpen }) => (isOpen ? Drop : Back)} ${({ isOpen }) => (isOpen ? '0.6s' : '0.2s')};
  animation-fill-mode: forwards;
  transition: 0.5s ease-in-out;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const BoxIdiom = styled.div`
  margin-top: 1.5rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  opacity: 0;
  animation: ${Smooth} 0.3s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  .title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 150%;
    letter-spacing: 0.0025em;
    color: var(--gray5);
    padding: 0 1rem;
  }

  .cards {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    @media (max-width: 425px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

export const BoxContactUs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.375rem;
  opacity: 0;
  animation: ${Smooth} 0.3s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  p {
    font-size: 2rem;
    color: var(--gray5);
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.0025em;
  }

  small {
    max-width: 31.25rem;
    font-size: 1.25rem;
    color: var(--gray5);
    line-height: 131.5%;
    letter-spacing: 0.0025em;
  }

  a {
    width: 90%;
    max-width: 19rem;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.0025em;
    line-height: 150%;
    text-align: center;
    color: var(--white);
    padding: 0.844rem 0;
    background: var(--primary);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    border: none;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70% 30%;
`;
