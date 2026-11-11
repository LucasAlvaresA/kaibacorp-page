import React from 'react';

import * as Styled from './styles';
import * as langs from '../../../langs/apps.json';
import { useLangs } from '../../../context/langsContext';
import { useInView } from '../../../hooks/useInView';

export const Apps = (): React.ReactElement => {
  const { language } = useLangs();
  const { ref, inView } = useInView<HTMLDivElement>();

  const appleLink = '';
  const googleLink = '';

  return (
    <Styled.Container ref={ref} $inView={inView}>
      <Styled.Inner>
        <Styled.Intro>
          <Styled.Index className="reveal">03</Styled.Index>
          <Styled.Title className="reveal reveal-1">{langs.main_title[language]}</Styled.Title>
        </Styled.Intro>

        <Styled.AppsArea className="reveal reveal-2">
          <Styled.DownloadButton
            src={'assets/svg/googleplay.svg'}
            alt="Disponível no Google Play"
            onClick={() => window.open(googleLink)}
          />
          <Styled.DownloadButton
            src={'assets/svg/appstore.svg'}
            alt="Baixar na App Store"
            onClick={() => window.open(appleLink)}
          />
        </Styled.AppsArea>
      </Styled.Inner>
    </Styled.Container>
  );
};
