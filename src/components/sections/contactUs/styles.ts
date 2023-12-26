import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.313rem 1rem 3.938rem 1rem;
  gap: 3.375rem;
  background-color: var(--primary);
  box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  @media screen and (min-width: 769px) {
    padding: 4.875rem 8.54%;
    gap: 2.375rem;
  }
`;

export const BoxText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.375rem;

  p {
    font-size: 2rem;
    color: var(--gray5);
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.0025em;
  }

  small {
    font-size: 1.5rem;
    color: var(--white);
    line-height: 131.5%;
    letter-spacing: 0.0025em;
  }

  @media screen and (min-width: 769px) {
    gap: 2.375rem;
  }
`;

export const Link = styled.a`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.0025em;
  line-height: 150%;
  color: var(--primary);
  background: var(--white);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  border: none;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: var(--primary-strong);
  }

  margin-top: 20px;

  @media screen and (min-width: 385px) {
    font-size: 0.875rem;
    padding: 0.844rem 1.969rem;
  }

  @media (max-width: 375px) {
    padding: 20px;
    font-size: 12px;
  }

  @media (max-width: 320px) {
    padding: 20px;
    font-size: 11px;
  }
`;
