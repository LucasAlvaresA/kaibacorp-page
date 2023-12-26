import React from 'react';

import * as Styled from './styles';
import * as langs from '../../../langs/apps.json';
import { useLangs } from '../../../context/langsContext';

export const Apps = (): React.ReactElement => {
  const { language } = useLangs();

  const appleLink = '';
  const googleLink = '';

  return (
    <>
      <Styled.Container>
        <Styled.MainArea>
          <Styled.Title>{langs.main_title[language]}</Styled.Title>
          <Styled.AppsArea>
            <Styled.DownloadButton
              src={'assets/svg/googleplay.svg'}
              onClick={() => window.open(googleLink)}
            />
            <Styled.DownloadButton
              src={'assets/svg/appstore.svg'}
              onClick={() => window.open(appleLink)}
            />
          </Styled.AppsArea>
        </Styled.MainArea>
      </Styled.Container>
    </>
  );
};
