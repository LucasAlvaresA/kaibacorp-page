import styled from 'styled-components';

interface IProps {
  isSelected: boolean;
}

export const Container = styled.button<IProps>`
  width: 100%;
  min-height: 2.65rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.3rem 0.6rem;
  gap: 0.55rem;
  border: 1px solid ${({ isSelected }) => (isSelected ? 'var(--primary)' : 'rgba(6, 28, 47, 0.07)')};
  border-radius: 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? 'var(--primary)' : '#F2F7FA')};
  font-family: var(--font-body);
  text-align: left;
  cursor: pointer;
  transition:
    background-color 0.25s var(--ease-out),
    border-color 0.25s var(--ease-out),
    transform 0.25s var(--ease-out);

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'var(--primary-strong)' : 'var(--ice)')};
    transform: translateY(-1px);
  }

  img {
    width: 1.4rem;
    height: 1.05rem;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(6, 28, 47, 0.18);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  p {
    color: ${({ isSelected }) => (isSelected ? 'var(--white)' : 'var(--ink)')};
    font-size: 0.72rem;
    font-weight: 600;
    line-height: 1.35;
  }

  small {
    color: ${({ isSelected }) => (isSelected ? 'rgba(255, 255, 255, 0.7)' : '#6B8398')};
    font-size: 0.63rem;
    line-height: 1.35;
  }
`;
