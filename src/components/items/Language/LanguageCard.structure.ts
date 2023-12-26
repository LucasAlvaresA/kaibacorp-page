import { langsType } from '../../../context/langsContext/langsContext.structure';

export interface ILanguageCardProps {
  flag: string;
  languageName: string;
  country: string;
  acronym: langsType;
}
