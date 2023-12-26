import { ReactElement } from 'react';
import { BoxText, Link, Container } from './styles';
import * as langs from '../../../langs/contactUs.json';
import { useLangs } from '../../../context/langsContext';

function ContactUs(): ReactElement {
  const { language } = useLangs();

  const contactUsTexts = langs.section_contactUs;

  return (
    <Container>
      <BoxText>
        <p>{contactUsTexts.box_text.title[language]}</p>
        <small>{contactUsTexts.box_text.text[language]}</small>
      </BoxText>
      <Link href="" target="_blank">
        {contactUsTexts.button[language]}
      </Link>
    </Container>
  );
}

export default ContactUs;
