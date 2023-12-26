import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray5);
  color: var(--white);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    height: fit-content;
  }
`;

export const MainArea = styled.div`
  width: 83%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 3rem;
`;

export const LicenceArea = styled.div`
  width: 20rem;
  height: 100%;

  @media (max-width: 1300px) {
    width: 40%;
  }

  @media (max-width: 730px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-top: 1.3rem;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 1.3rem;

  @media (max-width: 1300px) {
    font-size: 14px;
  }
`;

export const SolutionArea = styled.div`
  width: 18rem;
  height: 100%;

  @media (max-width: 1300px) {
    width: 40%;
  }

  @media (max-width: 730px) {
    width: 100%;
  }
`;

export const FollowUsArea = styled.div`
  width: fit-content;
  height: 100%;

  @media (max-width: 1300px) {
    width: 40%;
    margin-top: 1rem;
  }

  @media (max-width: 730px) {
    width: 100%;
  }
`;

export const SocialArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;

  @media (max-width: 1300px) {
    justify-content: flex-start;
  }
`;

export const SocialItem = styled.img`
  cursor: pointer;
  margin-right: 1rem;
`;

export const SignUpArea = styled.div`
  width: 18rem;
  height: 100%;

  @media (max-width: 1300px) {
    width: 40%;
    margin-top: 1rem;
  }

  @media (max-width: 730px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const EmailInput = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 1.3rem;

  *:focus {
    outline: none;
  }

  @media (max-width: 730px) {
    width: 60%;
  }

  @media (max-width: 440px) {
    width: 80%;
  }
`;

export const InputLabel = styled.div`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.0025em;
  align-items: center;
  line-height: 150%;
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: transparent;
  border: 1px solid var(--gray4);
  border-radius: 8px;
  color: var(--white);
  padding-left: 1rem;
`;

export const SignUpButton = styled.div`
  width: 95%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  padding: 12px 42px;
  gap: 10px;
  background: var(--primary);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--light-blue);
  }

  @media (max-width: 730px) {
    width: 50%;
  }

  @media (max-width: 440px) {
    width: 70%;
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 1300px) {
    margin-top: 2rem;
  }
`;
