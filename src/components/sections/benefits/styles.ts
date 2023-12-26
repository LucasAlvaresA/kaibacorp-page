import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray1);
  color: var(--gray5);
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleArea = styled.div`
  width: 60%;
  height: 10rem;
  margin-top: -2rem;
  margin-bottom: 1.5rem;
  @media (max-width: 960px) {
    margin-bottom: 2.5rem;
  }
  @media (max-width: 610px) {
    width: 80%;
  }
  @media (max-width: 455px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: 505px) {
    font-size: 35px;
  }

  @media (max-width: 455px) {
    font-size: 35px;
  }

  @media (max-width: 350px) {
    font-size: 30px;
  }
`;

export const StrongTitle = styled.h1`
  color: var(--primary);
  font-weight: 700;
  font-size: 40px;
  margin-right: 0.6rem;

  @media (max-width: 455px) {
    font-size: 35px;
  }

  @media (max-width: 350px) {
    font-size: 30px;
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
  gap: 5rem 9rem;
  margin-bottom: 7rem;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 1400px) {
    align-items: center;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background-color: var(--white);
  width: 26rem;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 1px 13px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  @media (max-width: 1500px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 1400px) {
    width: 100%;
    padding: 0 1rem;
    height: 300px;
  }
`;

export const CardTitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 25rem;
  height: fit-content;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  line-height: 1.8rem;

  @media (max-width: 1500px) {
    font-size: 20px;
    width: 100%;
  }

  text {
    color: var(--primary);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const CardText = styled.div`
  color: var(--gray5);
  font-size: 20px;
  font-weight: 400;
  width: 21rem;
  text-align: center;

  @media (max-width: 1500px) {
    font-size: 16px;
    width: 100%;
  }
`;
