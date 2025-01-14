import { ReactElement } from 'react';
import {
  Container,
  Header,
  Banner,
  GradientBottom,
  Title,
  Clients,
  SecondContent,
  Left,
  Right
} from './styles';
import logo from '../../../assets/logo.png';
import kaiba from '../../../assets/kaiba.png';
import client1 from '../../../assets/clients/client1.png';
import client2 from '../../../assets/clients/client2.png';
import client3 from '../../../assets/clients/client3.png';
import client4 from '../../../assets/clients/client4.png';
import client5 from '../../../assets/clients/client5.png';
import client6 from '../../../assets/clients/client6.png';
import * as langs from '../../../langs/resume.json';
import Burger from '../../items/Burger';
import { IResumeProps } from './Resume.structure';
import { useLangs } from '../../../context/langsContext';
import SwitchLanguages from '../../items/switchLanguages';

function Resume({ isOpen, setIsOpen }: IResumeProps): ReactElement {
  const { language } = useLangs();

  const resumeTexts = langs.section_resume;

  return (
    <Container>
      <Banner>
        <Header isOpen={isOpen}>
          <img src={logo} alt="Logo" className="image_desktop" />
          <div className="buttons">
            <a>{resumeTexts.header.button[language]}</a>
            <SwitchLanguages />
          </div>
          <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </Header>
        <Left>
          <Title>
            <h1>
              {resumeTexts.left.title[1][language]}{' '}
              <span>{resumeTexts.left.title[2][language]}</span>{' '}
              {resumeTexts.left.title[3][language]}
            </h1>
            <p>{resumeTexts.left.text[language]}</p>
          </Title>
          <SecondContent>
            <div>
              <a href="" target="_blank" className="primary_button">
                {resumeTexts.left.second_content.primary_button[language]}
              </a>
              <a href="" target="_blank" className="secondary_button">
                {resumeTexts.left.second_content.secondary_button[language]}
              </a>
            </div>
            <img src={kaiba} alt="kaiba" className="woman_mobile" />
          </SecondContent>
        </Left>
      </Banner>
      <Right>
        <img src={kaiba} alt="kaiba" className="woman_desktop" />
        <GradientBottom>
          <p>{resumeTexts.gradient_bottom.title[language]}</p>
          <Clients>
            <div>
              <img src={client1} alt="client1" />
              <img src={client2} alt="client2" />
              <img src={client3} alt="client3" />
              <img src={client4} alt="client4" />
              <img src={client5} alt="client5" />
              <img src={client6} alt="client6" />
            </div>
          </Clients>
        </GradientBottom>
      </Right>
    </Container>
  );
}

export default Resume;
