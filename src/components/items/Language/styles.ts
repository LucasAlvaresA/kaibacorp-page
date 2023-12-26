import styled from 'styled-components';

interface IProps {
  isSelected: boolean;
}

export const Container = styled.div<IProps>`
  width: 8.375rem;
  height: 2.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? 'var(--primary)' : 'var(--gray1)')};
  cursor: pointer;

  :hover {
    background-color: ${({ isSelected }) =>
      isSelected ? 'var(--primary-strong)' : 'var(--gray2)'};
  }

  img {
    width: 1.5rem;
    height: 1.125rem;
    border: ${({ isSelected }) => (isSelected ? '1px solid var(--white)' : 'none')};
    border-radius: 1px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  p {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 150%;
    letter-spacing: 0.0025em;
    color: ${({ isSelected }) => (isSelected ? 'var(--white)' : 'var(--gray5)')};
    margin-bottom: -0.25rem;
  }

  small {
    font-size: 0.75rem;
    line-height: 150%;
    letter-spacing: 0.0025em;
    color: ${({ isSelected }) => (isSelected ? 'var(--white)' : 'var(--gray5)')};
  }
`;
