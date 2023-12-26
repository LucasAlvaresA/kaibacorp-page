import React from 'react';

import * as Styled from './styles';
import * as langs from '../../../langs/solutions.json';
import {
  MdCreditCard,
  MdInsights,
  MdOutlinePaid,
  MdOutlineSavings,
  MdOutlineAccountTree,
  MdOutlinePersonSearch
} from 'react-icons/md';
import { useLangs } from '../../../context/langsContext';

export const Solutions = (): React.ReactElement => {
  const { language } = useLangs();

  const cardsText = langs.section_areas;

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.MainArea>
          <Styled.MainCard>
            <Styled.Title>{langs.main_title[language]}</Styled.Title>
            <Styled.MainText>{langs.main_text[language]}</Styled.MainText>
          </Styled.MainCard>
        </Styled.MainArea>
        <Styled.CardsArea>
          <Styled.Card>
            <Styled.CardTitleArea>
              <Styled.IconArea>
                <MdCreditCard />
              </Styled.IconArea>
              {cardsText.area_emission.title[language]}
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsText.area_emission.text[language]}</Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardTitleArea>
              <Styled.IconArea>
                <MdOutlinePersonSearch />
              </Styled.IconArea>
              {cardsText.area_onboarding.title[language]}
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsText.area_onboarding.text[language]}</Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardTitleArea>
              <Styled.IconArea>
                <MdInsights />
              </Styled.IconArea>
              {cardsText.area_insights.title[language]}
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsText.area_insights.text[language]}</Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardTitleArea>
              <Styled.IconArea>
                <MdOutlineAccountTree />
              </Styled.IconArea>
              {cardsText.area_services.title[language]}
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsText.area_services.text[language]}</Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardTitleArea>
              <Styled.IconArea>
                <MdOutlineSavings />
              </Styled.IconArea>
              {cardsText.area_bank.title[language]}
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsText.area_bank.text[language]}</Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardTitleArea>
              <Styled.IconArea>
                <MdOutlinePaid />
              </Styled.IconArea>
              {cardsText.area_payments.title[language]}
            </Styled.CardTitleArea>
            <Styled.CardText>{cardsText.area_payments.text[language]}</Styled.CardText>
          </Styled.Card>
        </Styled.CardsArea>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
