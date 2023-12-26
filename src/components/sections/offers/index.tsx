import React from 'react';

import * as Styled from './styles';
import * as langs from '../../../langs/offers.json';
import { MdCheckCircleOutline, MdOutlineCancel } from 'react-icons/md';
import { useLangs } from '../../../context/langsContext';

export const Offers = (): React.ReactElement => {
  const { language } = useLangs();

  return (
    <Styled.Container>
      <Styled.MainArea>
        <Styled.BorderTopContainer>
          <Styled.BorderTop />
          <Styled.MarginTop />
        </Styled.BorderTopContainer>
        <Styled.LeftContainer>
          <Styled.LeftIconArea>
            <MdCheckCircleOutline />
          </Styled.LeftIconArea>
          <Styled.LeftMainArea>
            <Styled.LeftTitle>
              <span>{langs.mainTitle.left.title[1][language]}</span>{' '}
              {langs.mainTitle.left.title[2][language]}
            </Styled.LeftTitle>
            <Styled.List>
              <Styled.ListItem>{langs.list_left[1][language]}</Styled.ListItem>
              <Styled.ListItem>{langs.list_left[2][language]}</Styled.ListItem>
              <Styled.ListItem>{langs.list_left[3][language]}</Styled.ListItem>
              <Styled.ListItem>{langs.list_left[4][language]}</Styled.ListItem>
            </Styled.List>
          </Styled.LeftMainArea>
        </Styled.LeftContainer>
        <Styled.BorderMiddleContainer>
          <Styled.BorderLeft />
          <Styled.BorderArea />
          <Styled.BorderRight />
        </Styled.BorderMiddleContainer>
        <Styled.RightContainer>
          <Styled.RightIconArea>
            <MdOutlineCancel />
          </Styled.RightIconArea>
          <Styled.RightMainArea>
            <Styled.RightTitle>
              <span>{langs.mainTitle.right.title[1][language]}</span>{' '}
              {langs.mainTitle.right.title[2][language]}
            </Styled.RightTitle>
            <Styled.List>
              <Styled.ListItem>{langs.list_right[1][language]}</Styled.ListItem>
              <Styled.ListItem>{langs.list_right[2][language]}</Styled.ListItem>
              <Styled.ListItem>{langs.list_right[3][language]}</Styled.ListItem>
              <Styled.ListItem>{langs.list_right[4][language]}</Styled.ListItem>
            </Styled.List>
          </Styled.RightMainArea>
        </Styled.RightContainer>
        <Styled.BorderBottomContainer>
          <Styled.MarginBottom />
          <Styled.BorderBottom />
        </Styled.BorderBottomContainer>
      </Styled.MainArea>
    </Styled.Container>
  );
};
