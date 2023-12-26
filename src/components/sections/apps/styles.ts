import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray1);
  color: var(--white);
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const MainArea = styled.div`
  width: 80%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 1.5rem;
`;

export const AppsArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const DownloadButton = styled.img`
  cursor: pointer;
  margin-right: 1rem;

  @media (max-width: 590px) {
    margin-top: 1rem;
  }
`;
