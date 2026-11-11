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
import { useInView } from '../../../hooks/useInView';

export const Solutions = (): React.ReactElement => {
  const { language } = useLangs();

  const cardsText = langs.section_areas;
  const { ref, inView } = useInView<HTMLDivElement>();

  const services = [
    {
      icon: <MdCreditCard />,
      title: cardsText.area_emission.title[language],
      text: cardsText.area_emission.text[language]
    },
    {
      icon: <MdOutlinePersonSearch />,
      title: cardsText.area_onboarding.title[language],
      text: cardsText.area_onboarding.text[language]
    },
    {
      icon: <MdInsights />,
      title: cardsText.area_insights.title[language],
      text: cardsText.area_insights.text[language]
    },
    {
      icon: <MdOutlineAccountTree />,
      title: cardsText.area_services.title[language],
      text: cardsText.area_services.text[language]
    },
    {
      icon: <MdOutlineSavings />,
      title: cardsText.area_bank.title[language],
      text: cardsText.area_bank.text[language]
    },
    {
      icon: <MdOutlinePaid />,
      title: cardsText.area_payments.title[language],
      text: cardsText.area_payments.text[language]
    }
  ];

  return (
    <Styled.Container ref={ref} $inView={inView}>
      <Styled.Inner>
        <Styled.Intro>
          <Styled.Index className="reveal">02</Styled.Index>
          <Styled.Title className="reveal reveal-1">{langs.main_title[language]}</Styled.Title>
          <Styled.MainText className="reveal reveal-2">{langs.main_text[language]}</Styled.MainText>
        </Styled.Intro>

        <Styled.CardsArea>
          {services.map((service, index) => (
            <Styled.Card
              key={service.title}
              className="reveal"
              style={{ transitionDelay: `${0.1 + index * 0.06}s` }}
            >
              <Styled.IconArea>{service.icon}</Styled.IconArea>
              <Styled.CardTitleArea>{service.title}</Styled.CardTitleArea>
              <Styled.CardText>{service.text}</Styled.CardText>
            </Styled.Card>
          ))}
        </Styled.CardsArea>
      </Styled.Inner>
    </Styled.Container>
  );
};
