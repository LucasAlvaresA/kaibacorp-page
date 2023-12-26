import styled from 'styled-components';

interface IProps {
  isOpen: boolean;
}

export const Container = styled.div<IProps>`
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'static')};
  top: 2.45rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
  background: var(--gray1);
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;

  div {
    width: 100%;
    height: 2px;
    background-color: black;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
