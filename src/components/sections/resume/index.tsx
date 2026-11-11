import { ReactElement } from 'react';
import {
  Container,
  Header,
  Hero,
  Content,
  Title,
  Description,
  Actions,
  Visual,
  ClientsBar,
  ClientsLabel,
  Marquee,
  MarqueeTrack,
  MarqueeGroup
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

const clients = [client1, client2, client3, client4, client5, client6];

function Resume({ isOpen, setIsOpen }: IResumeProps): ReactElement {
  const { language } = useLangs();

  const resumeTexts = langs.section_resume;
  const title = resumeTexts.left.title;

  return (
    <Container>
      <Header isOpen={isOpen}>
        <div className="brand">
          <img src={logo} alt="KaibaCorp" className="brand-mark" />
          <span className="brand-name">KaibaCorp</span>
        </div>
        <div className="actions">
          <SwitchLanguages />
          <a href="" target="_blank" className="contact">
            {resumeTexts.header.button[language]}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </Header>

      <Hero>
        <Content>
          <Title>
            <h1>
              {title[1][language]} <span>{title[2][language]}</span> {title[3][language]}
            </h1>
          </Title>
          <Description>{resumeTexts.left.text[language]}</Description>
          <Actions>
            <a href="" target="_blank" className="primary_button">
              <span>{resumeTexts.left.second_content.primary_button[language]}</span>
              <span className="action-icon" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="" target="_blank" className="secondary_button">
              <span>{resumeTexts.left.second_content.secondary_button[language]}</span>
              <span className="action-icon" aria-hidden="true">
                ↓
              </span>
            </a>
          </Actions>
        </Content>

        <Visual>
          <span className="halo" aria-hidden="true" />
          <span className="orbit orbit-one" aria-hidden="true" />
          <span className="orbit orbit-two" aria-hidden="true" />
          <img src={logo} alt="" className="watermark" aria-hidden="true" />
          <img src={kaiba} alt="Seto Kaiba" className="portrait" />
        </Visual>
      </Hero>

      <ClientsBar>
        <ClientsLabel>{resumeTexts.gradient_bottom.title[language]}</ClientsLabel>
        <Marquee>
          <MarqueeTrack>
            {[0, 1].map((group) => (
              <MarqueeGroup
                key={group}
                aria-hidden={group === 1 ? true : undefined}
                className={group === 1 ? 'is-clone' : undefined}
              >
                {clients.map((client, index) => (
                  <img
                    key={`${group}-${index}`}
                    src={client}
                    alt={group === 0 ? 'Blue-Eyes White Dragon' : ''}
                  />
                ))}
              </MarqueeGroup>
            ))}
          </MarqueeTrack>
        </Marquee>
      </ClientsBar>
    </Container>
  );
}

export default Resume;
