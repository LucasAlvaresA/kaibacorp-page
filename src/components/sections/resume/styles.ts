import styled from 'styled-components';

interface IProps {
  isOpen: boolean;
}

export const Container = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8.54vw min(100vh, 43.75rem);
  overflow: hidden;
  margin-bottom: 100px;
  background: var(--primary);

  @media screen and (min-width: 769px) {
    padding: 0 8.54vw;
    flex-direction: row;
    height: 120vh;
    min-height: calc(100vh + 200px);
    max-height: calc(100vh + 270px);
    background: linear-gradient(70.14deg, var(--primary) 0%, #8edadd 100%);
  }
`;

export const Header = styled.header<IProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 7.813rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;

  a {
    display: none;
  }

  .image_desktop {
    display: none;
  }

  .buttons {
    display: none;
  }

  @media screen and (min-width: 769px) {
    position: absolute;
    min-height: 149px;
    padding: 0 8.54%;

    .image_mobile {
      display: none;
    }

    .image_desktop {
      display: block;
      width: 35%;
      max-width: 130px;
      margin-bottom: 50px;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: flex-end;
      gap: 2vw;
      margin-top: 2rem;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 13rem;
      height: 3.5rem;
      font-size: 0.875em;
      font-weight: 700;
      letter-spacing: 0.0025em;
      color: var(--white);
      background: var(--primary-strong);
      padding: 0.844rem 1.531rem;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
      border: none;
      border-radius: 8px;
      line-height: 150%;
      text-align: center;
    }
  }

  @media screen and (min-width: 1600px) {
    .image_desktop {
      max-width: 180px;
    }
  }
`;

export const Banner = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 7.813rem 1rem 0;

  @media screen and (min-width: 769px) {
    position: static;
    width: 50vw;
    height: 100vh;
    padding: 0;
    background: transparent;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const Left = styled.div`
  position: relative;
  width: 100%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3vh;

  p {
    z-index: 5;
  }

  @media screen and (min-height: 750px) {
    height: 85vh;
  }

  @media screen and (min-width: 769px) {
    height: 75%;
    justify-content: center;
  }
`;

export const Title = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5vh;

  h1 {
    color: var(--gray6);
    font-size: 8vw;
    line-height: 119.5%;
  }

  span {
    color: var(--white);
  }

  p {
    color: var(--gray6);
    font-size: 4.3vw;
  }

  @media screen and (min-width: 769px) {
    height: auto;

    h1 {
      color: var(--gray6);
      font-size: 4vw;
    }

    p {
      color: var(--gray6);
      font-size: 1.8vw;
    }
  }

  @media screen and (min-width: 1450px) {
    h1 {
      font-size: 3.5vw;
    }

    p {
      font-size: 1.4vw;
    }
  }

  @media screen and (min-width: 1920px) {
    h1 {
      font-size: 2.3vw;
    }

    p {
      font-size: 1.1vw;
    }
  }
`;

export const SecondContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  }

  a {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }

  .clients_area_mobile {
    display: none;
    width: 100%;
    height: fit-content;
    font-weight: 400;
    font-size: 28px;
    color: var(--white);
  }

  .primary_button {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.0025em;
    color: var(--primary);
    background: var(--white);
    padding: 0.844rem 4rem;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 8px;
    line-height: 150%;
  }

  .secondary_button {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.0025em;
    color: var(--white);
    background: transparent;
    padding: 0.844rem 1rem;
    border: 2px solid var(--white);
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    line-height: 150%;
  }

  p {
    font-size: 4vw;
    color: var(--white);
    line-height: 150%;
  }

  span {
    font-weight: 700;
  }

  .woman_mobile {
    width: 120%;
    transform: translateX(-10%);
    margin-top: 10vh;
  }

  @media screen and (min-width: 430px) {
    .primary_button {
      font-size: 0.875rem;
      padding: 0.844rem 4.375rem;
    }

    .secondary_button {
      font-size: 0.875rem;
      padding: 0.844rem 2.438rem;
    }

    a {
      width: 100%;
      max-width: 326px;
    }
  }

  @media screen and (min-width: 769px) {
    gap: 2.5vh;

    p {
      width: 90%;
      font-size: 1.2vw;
    }

    .woman_mobile {
      display: none;
    }
  }

  @media screen and (min-width: 1450px) {
    p {
      font-size: 1.4vw;
    }
  }

  @media screen and (min-width: 1585px) {
    div {
      flex-direction: row-reverse;
      justify-content: flex-end;
      gap: 2rem;
    }

    a {
      width: auto;
      max-width: none;
    }

    .primary_button {
      padding: 0.844rem 1.531rem;
    }
  }

  @media screen and (min-width: 1920px) {
    p {
      font-size: 1.1vw;
    }
  }

  @media (max-width: 769px) {
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    a {
      max-width: 93%;
      text-align: center;
    }

    .clients_area_mobile {
      display: flex;
    }
  }

  @media (max-width: 1000px) {
    div {
      width: 100%;
      height: fit-content;
      gap: 0;

      a {
        margin-top: 1rem;
      }
    }
  }
`;

export const Right = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 70vh;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  padding: 0;
  transform: translateY(-1px);
  z-index: 4;

  .woman_desktop {
    display: none;
  }

  @media screen and (min-width: 769px) {
    position: static;
    width: 50vw;
    height: 75%;
    max-height: none;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: transparent;
    overflow: visible;
    transform: none;

    .woman_desktop {
      display: block;
      height: 100%;
      max-width: 1029px;
    }
  }

  @media screen and (min-width: 1450px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding-bottom: 105rem;
  }

  @media (max-width: 425px) {
    padding-bottom: 50rem;
  }

  @media (max-width: 375px) {
    padding-bottom: 40rem;
  }

  @media (max-width: 320px) {
    padding-bottom: 30rem;
  }
`;

export const GradientBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 1rem 1.25rem;
  background: linear-gradient(180deg, rgba(31, 182, 194, 0) 0%, var(--primary) 43.28%);
  transform: translateY(1px);
  z-index: 3;

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--white);
  }

  @media (min-width: 769px) {
    max-height: 370px;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 0 8.54% 2%;
    gap: 2rem;

    p {
      font-size: 2vw;
    }
  }

  @media (max-width: 769px) {
    display: none;
  }
`;

export const Clients = styled.div`
  width: 100vw;
  height: 35%;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  padding: 0 1rem;

  ::-webkit-scrollbar {
    display: none;
  }

  div {
    height: fit-content;
    max-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  img {
    transition: 0.3s ease-in-out;
    width: 100px;
  }

  @media screen and (min-width: 769px) {
    width: 100%;
    overflow-x: visible;
    padding: 0;

    div {
      justify-content: space-between;
      gap: 0;
    }

    img {
      transition: 0.3s ease-in-out;
      z-index: 3;
    }

    img:hover {
      transform: scale(1.3);
    }
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const CircleArrow = styled.div`
  position: absolute;
  top: 85vh;
  right: 5vw;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  svg {
    width: 50px;
    height: 50px;
    color: var(--gray6);
  }

  @media screen and (min-height: 600px) {
    top: 80vh;
  }

  @media screen and (min-height: 700px) {
    top: 75vh;
  }

  @media screen and (min-height: 800px) {
    top: 65vh;
  }

  @media screen and (min-height: 1000px) {
    top: 75vh;
  }

  @media screen and (min-width: 769px) {
    top: auto;
    max-width: 2.7rem;
    bottom: 28%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;
