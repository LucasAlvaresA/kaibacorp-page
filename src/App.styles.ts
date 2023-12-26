import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  background-color: var(--gray1);

  @media screen and (min-width: 769px) {
    padding: 0 8.54vw;
  }
`;
