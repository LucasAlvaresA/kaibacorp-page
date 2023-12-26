import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);
  color: var(--gray6);
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-direction: row;
  @media (max-width: 1760px) {
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 83%;
  @media (max-width: 2130px) {
    flex-wrap: wrap;
  }
`;

export const MainArea = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const MainCard = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 455px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  line-height: 5rem;
  font-size: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3rem;
  @media (max-width: 455px) {
    font-size: 40px;
    line-height: 3rem;
    width: 100%;
  }
`;

export const MainText = styled.p`
  color: var(--white);
  font-weight: 400;
  font-size: 28px;
  margin-top: 2rem;

  @media (max-width: 455px) {
    font-size: 20px;
  }
`;

export const CardsArea = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  align-content: space-between;
  gap: 5rem 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1542px) {
    gap: 5rem 10.5rem;
  }

  @media (max-width: 1378px) {
    gap: 5rem 4rem;
  }

  @media (max-width: 425px) {
    gap: 2rem 4rem;
  }

  @media (max-width: 350px) {
    gap: 5rem 4rem;
  }

  @media (max-width: 300px) {
    gap: 10rem 4rem;
  }
`;

export const Card = styled.div`
  width: 24rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const CardTitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.8rem;

  @media (max-width: 450px) {
    font-size: 20px;
  }

  @media (max-width: 275px) {
    font-size: 20px;
  }
`;

export const IconArea = styled.div`
  width: 15%;
  font-size: 2rem;
  margin-right: 1rem;
`;

export const CardText = styled.div`
  color: var(--white);
  font-size: 20px;
  font-weight: 400;
  width: 100%;

  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
