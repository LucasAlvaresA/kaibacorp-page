import React from 'react';

import * as Styled from './styles';
import * as langs from '../../../langs/benefits.json';
import { useLangs } from '../../../context/langsContext';

export const Benefits = (): React.ReactElement => {
  const { language } = useLangs();
  const cardsTexts = langs.section_cards;

  return (
    <Styled.Container>
      <Styled.TitleArea>
        <Styled.Title>
          <Styled.StrongTitle>{langs.main_title[1][language]}</Styled.StrongTitle>
          {langs.main_title[2][language]}
        </Styled.Title>
      </Styled.TitleArea>
      <Styled.CardsArea>
        <>
          <Styled.Cards>
            <Styled.Card>
              <Styled.CardTitleArea>
                {cardsTexts.card_infrastructure.title[1][language]}{' '}
                <text>{cardsTexts.card_infrastructure.title[2][language]}</text>{' '}
                <text>{cardsTexts.card_infrastructure.title[3][language]}</text>{' '}
                {cardsTexts.card_infrastructure.title[4][language]}
              </Styled.CardTitleArea>
              <Styled.CardText>{cardsTexts.card_infrastructure.text[language]}</Styled.CardText>
            </Styled.Card>
            <Styled.Card>
              <Styled.CardTitleArea>
                {cardsTexts.card_integration.title[1][language]}{' '}
                <text>{cardsTexts.card_integration.title[2][language]}</text>{' '}
                {cardsTexts.card_integration.title[3][language]}
              </Styled.CardTitleArea>
              <Styled.CardText>{cardsTexts.card_integration.text[language]}</Styled.CardText>
            </Styled.Card>
            <Styled.Card>
              <Styled.CardTitleArea>
                {cardsTexts.card_integration.title[1][language]}{' '}
                <text>{cardsTexts.card_integration.title[2][language]}</text>{' '}
                {cardsTexts.card_integration.title[3][language]}
              </Styled.CardTitleArea>
              <Styled.CardText>{cardsTexts.card_integration.text[language]}</Styled.CardText>
            </Styled.Card>
          </Styled.Cards>
        </>
      </Styled.CardsArea>
    </Styled.Container>
  );
};
