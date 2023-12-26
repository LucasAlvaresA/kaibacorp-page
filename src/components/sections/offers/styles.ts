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
  flex-wrap: wrap;
`;

export const MainArea = styled.div`
  background-color: var(--gray1);
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.75),
    inset 4px 4px 13px rgba(217, 217, 217, 0.75);
  border-radius: 24px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 6rem;
  margin-bottom: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    width: 94%;
  }

  @media (max-width: 570px) {
    padding-bottom: 5rem;
    padding-top: 3rem;
  }

  @media (max-width: 400px) {
    padding-bottom: 1rem;
    padding-top: 2rem;
  }

  @media (max-width: 310px) {
    padding-bottom: 5rem;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 18rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-image: linear-gradient(var(--gray2) 60%, rgba(255, 255, 255, 0) 0%);
  background-position: right;
  background-size: 2px 30px;
  background-repeat: repeat-y;

  @media (max-width: 1200px) {
    width: 25rem;
    flex-wrap: wrap;
    margin-top: 3rem;
    margin-bottom: 1rem;
    background-image: none;
  }

  @media (max-width: 570px) {
    width: 95%;
    margin-top: 0.5rem;
  }
`;

export const LeftMainArea = styled.div`
  width: 25rem;
  height: 100%;

  @media (max-width: 510px) {
    height: fit-content;
    width: 93%;
  }
`;

export const LeftIconArea = styled.div`
  color: var(--success);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 4rem;
  font-size: 2.5rem;

  @media (max-width: 1200px) {
    height: fit-content;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  @media (max-width: 570px) {
    width: 93%;
  }
`;

export const LeftTitle = styled.span`
  color: var(--gray5);
  font-weight: 700;
  font-size: 1.5rem;

  span {
    color: var(--success);
  }

  @media (max-width: 510px) {
    font-size: 1.2rem;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 18rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    width: 25rem;
    flex-wrap: wrap;
    margin-bottom: 5rem;
  }

  @media (max-width: 570px) {
    width: 95%;
    margin-bottom: 1rem;
  }

  @media (max-width: 450px) {
    width: 95%;
    margin-bottom: 5rem;
  }
`;

export const RightMainArea = styled.div`
  width: 25rem;
  height: 100%;

  @media (max-width: 510px) {
    height: fit-content;
    width: 93%;
  }
`;

export const RightIconArea = styled.div`
  color: var(--error);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 4rem;
  font-size: 2.5rem;

  @media (max-width: 1200px) {
    height: fit-content;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  @media (max-width: 570px) {
    width: 93%;
  }
`;

export const RightTitle = styled.div`
  color: var(--gray5);
  font-weight: 700;
  font-size: 1.5rem;

  span {
    color: var(--error);
  }

  @media (max-width: 510px) {
    font-size: 1.2rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 1rem;
  list-style-type: circle;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
    font-size: 16px;
  }
`;

export const BorderTopContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const BorderBottomContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const BorderTop = styled.div`
  width: 6.25rem;
  height: 6rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.75),
    inset 4px 4px 13px rgba(217, 217, 217, 0.75);
`;

export const MarginTop = styled.div`
  width: 2px;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(var(--gray2) 60%, rgba(255, 255, 255, 0) 0%);
  background-position: right;
  background-size: 2px 30px;
  background-repeat: repeat-y;
`;

export const BorderBottom = styled.div`
  width: 6.25rem;
  height: 6rem;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.75),
    inset 4px 4px 13px rgba(217, 217, 217, 0.75);
`;
export const MarginBottom = styled.div`
  width: 2px;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(var(--gray2) 60%, rgba(255, 255, 255, 0) 0%);
  background-position: right;
  background-size: 2px 30px;
  background-repeat: repeat-y;
`;

export const BorderMiddleContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: none;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: flex;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
    margin-top: 4rem;
  }

  @media (max-width: 300px) {
    margin-top: 8rem;
  }
`;

export const BorderLeft = styled.div`
  width: 3rem;
  height: 6rem;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.75),
    inset 4px 4px 13px rgba(217, 217, 217, 0.75);
  margin-top: -0.5rem;
`;

export const BorderRight = styled.div`
  width: 3rem;
  height: 6rem;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.75),
    inset 4px 4px 13px rgba(217, 217, 217, 0.75);
  margin-top: -0.5rem;
`;

export const BorderArea = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, var(--gray2) 60%, rgba(255, 255, 255, 0) 0%);
  background-position: center;
  background-size: 30px 2px;
  background-repeat: repeat-x;
`;
