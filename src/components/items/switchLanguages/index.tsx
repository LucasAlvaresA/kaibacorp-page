import React, { ReactElement } from 'react';
import brazil_flag from '../../../assets/flags/brazil_flag.svg';
import usa_flag from '../../../assets/flags/usa_flag.svg';
import spain_flag from '../../../assets/flags/spain_flag.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { Container } from './styles';
import LanguageCard from '../Language';
import { Languages } from './languages';
import { useLangs } from '../../../context/langsContext';

function SwitchLanguages(): ReactElement {
  const { language } = useLangs();
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const isOpen = isHovered || isFocused;

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <img className="flag" src={Languages[language].flag} alt={Languages[language].country} />
      <div className="text">
        <p>{Languages[language].languageName}</p>
        <small>{Languages[language].country}</small>
      </div>
      <IoIosArrowDown className="chevron" aria-hidden="true" />
      {isOpen && (
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
          <LanguageCard flag={spain_flag} languageName="Español" country="España" acronym="es-es" />
        </div>
      )}
    </Container>
  );
}

export default SwitchLanguages;
