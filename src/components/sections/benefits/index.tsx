import React from 'react';

import * as Styled from './styles';
import * as langs from '../../../langs/benefits.json';
import { useLangs } from '../../../context/langsContext';
import { useInView } from '../../../hooks/useInView';

export const Benefits = (): React.ReactElement => {
  const { language } = useLangs();
  const cardsTexts = langs.section_cards;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Styled.Container ref={ref} $inView={inView}>
      <Styled.Inner>
        <Styled.Head>
          <Styled.Index className="reveal">01</Styled.Index>
          <Styled.Title className="reveal reveal-1">
            <Styled.StrongTitle>{langs.main_title[1][language]}</Styled.StrongTitle>{' '}
            <span>{langs.main_title[2][language]}</span>
          </Styled.Title>
        </Styled.Head>

        <Styled.CardsArea>
          <Styled.Card className="reveal reveal-2">
            <Styled.CardTop>
              <span className="card-index">01</span>
              <span className="card-rule" />
            </Styled.CardTop>
            <Styled.CardTitleArea>
              {cardsTexts.card_infrastructure.title[1][language]}{' '}
              {cardsTexts.card_infrastructure.title[2][language]}{' '}
              <em>{cardsTexts.card_infrastructure.title[3][language]}</em>
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsTexts.card_infrastructure.text[language]}</Styled.CardText>
          </Styled.Card>

          <Styled.Card className="reveal reveal-3">
            <Styled.CardTop>
              <span className="card-index">02</span>
              <span className="card-rule" />
            </Styled.CardTop>
            <Styled.CardTitleArea>
              {cardsTexts.card_integration.title[1][language]}{' '}
              <em>{cardsTexts.card_integration.title[2][language]}</em>
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsTexts.card_integration.text[language]}</Styled.CardText>
          </Styled.Card>

          <Styled.Card className="reveal reveal-4">
            <Styled.CardTop>
              <span className="card-index">03</span>
              <span className="card-rule" />
            </Styled.CardTop>
            <Styled.CardTitleArea>
              <em>{cardsTexts.card_open_finance.title[1][language]}</em>{' '}
              {cardsTexts.card_open_finance.title[2][language]}
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsTexts.card_open_finance.text[language]}</Styled.CardText>
          </Styled.Card>
        </Styled.CardsArea>
      </Styled.Inner>
    </Styled.Container>
  );
};
