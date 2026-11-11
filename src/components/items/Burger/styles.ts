import styled from 'styled-components';

interface IProps {
  isOpen: boolean;
}

export const Container = styled.button<IProps>`
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'static')};
  top: 1.05rem;
  right: var(--gutter);
  z-index: 20;
  width: 2.9rem;
  height: 2.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 0.55rem;
  background: rgba(4, 24, 38, 0.32);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 26px -20px rgba(0, 0, 0, 0.8);
  transition:
    background 0.3s var(--ease-out),
    border-color 0.3s var(--ease-out);

  div {
    width: 1.15rem;
    height: 1.5px;
    border-radius: 2px;
    background-color: var(--white);
    transform-origin: center;
    transition:
      transform 0.3s var(--ease-out),
      opacity 0.2s var(--ease-out);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.45);
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    div:nth-child(1) {
      transform: translateY(6.5px) rotate(45deg);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:nth-child(3) {
      transform: translateY(-6.5px) rotate(-45deg);
    }
  `}

  @media screen and (min-width: 901px) {
    display: none;
  }
`;
