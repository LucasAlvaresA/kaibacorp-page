import { ReactElement } from 'react';
import { useLangs } from '../../../context/langsContext';
import { ILanguageCardProps } from './LanguageCard.structure';
import { Container } from './styles';

function LanguageCard({ flag, languageName, country, acronym }: ILanguageCardProps): ReactElement {
  const { language, setLanguage } = useLangs();

  return (
    <Container
      onClick={() => {
        setLanguage(acronym);
        localStorage.setItem('lang', acronym);
      }}
      isSelected={language === acronym}
    >
      <img src={flag} alt={country} />
      <div>
        <p>{languageName}</p>
        <small>{country}</small>
      </div>
    </Container>
  );
}

export default LanguageCard;
