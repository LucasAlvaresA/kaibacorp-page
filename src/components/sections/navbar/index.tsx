import { ReactElement } from 'react';

import { Container, BoxIdiom, BoxContactUs, Grid } from './styles';
import brazil_flag from '../../../assets/brazil_flag.svg';
import usa_flag from '../../../assets/usa_flag.svg';
import spain_flag from '../../../assets/spain_flag.svg';
import { INavbarProps } from './Navbar.structure';
import LanguageCard from '../../items/Language';
import * as langs from '../../../langs/navbar.json';
import { useLangs } from '../../../context/langsContext';

function Navbar({ isOpen }: INavbarProps): ReactElement {
  const { language } = useLangs();

  const navbarTexts = langs.section_navbar;

  return (
    <Container isOpen={isOpen}>
      {isOpen && (
        <Grid>
          <BoxContactUs>
            <p>{navbarTexts.box_contactUs.title[language]}</p>
            <small>{navbarTexts.box_contactUs.text[language]}</small>
            <a href="" target="_blank">
              {navbarTexts.box_contactUs.button[language]}
            </a>
          </BoxContactUs>
          <BoxIdiom>
            <p className="title">{navbarTexts.language.title[language]}</p>
            <div className="cards">
              <LanguageCard
                flag={brazil_flag}
                languageName="Português"
                country="Brasil"
                acronym="pt-br"
              />
              <LanguageCard
                flag={usa_flag}
                languageName="English"
                country="United States"
                acronym="en-en"
              />
              <LanguageCard
                flag={spain_flag}
                languageName="Español"
                country="España"
                acronym="es-es"
              />
            </div>
          </BoxIdiom>
        </Grid>
      )}
    </Container>
  );
}

export default Navbar;
