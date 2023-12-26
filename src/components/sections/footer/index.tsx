import React from 'react';

import * as Styled from './styles';
import * as langs from '../../../langs/footer.json';
import { useLangs } from '../../../context/langsContext';

export const Footer = (): React.ReactElement => {
  const { language } = useLangs();

  const faceLink = '';
  const instaLink = '';
  const youtubeLink = '';
  const linkedinLink = '';

  return (
    <Styled.Container>
      <Styled.MainArea>
        <Styled.LicenceArea>
          <Styled.Title>{langs.licenses.title[language]}</Styled.Title>
          <Styled.Text>{langs.licenses.text[language]}</Styled.Text>
        </Styled.LicenceArea>
        <Styled.SolutionArea>
          <Styled.Title>{langs.solutions.title[language]}</Styled.Title>
          <Styled.Text>{langs.solutions.text[language]}</Styled.Text>
        </Styled.SolutionArea>
        <Styled.FollowUsArea>
          <Styled.Title>{langs.follow_us[language]}</Styled.Title>
          <Styled.SocialArea>
            <Styled.SocialItem
              src={'assets/svg/facebook.svg'}
              onClick={() => window.open(faceLink)}
            />
            <Styled.SocialItem
              src={'assets/svg/instagram.svg'}
              onClick={() => window.open(instaLink)}
            />
            <Styled.SocialItem
              src={'assets/svg/youtube.svg'}
              onClick={() => window.open(youtubeLink)}
            />
            <Styled.SocialItem
              src={'assets/svg/linkedin.svg'}
              onClick={() => window.open(linkedinLink)}
            />
          </Styled.SocialArea>
        </Styled.FollowUsArea>
        {/* <Styled.SignUpArea>
          <Styled.Title>{langs.sign_up.title[language]}</Styled.Title>
          <Styled.EmailInput>
            <Styled.InputLabel>E-mail</Styled.InputLabel>
            <Styled.Input placeholder={`${langs.sign_up.placeholder[language]}`} />
          </Styled.EmailInput>
          <Styled.SignUpButton>{langs.sign_up.button_text[language]}</Styled.SignUpButton>
        </Styled.SignUpArea> */}
        <Styled.InfoArea>{langs.info_text}</Styled.InfoArea>
      </Styled.MainArea>
    </Styled.Container>
  );
};
