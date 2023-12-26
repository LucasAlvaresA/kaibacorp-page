import { ReactElement } from 'react';
import { IBurgerProps } from './Burger.structure';
import { Container } from './styles';

function Burger({ onClick, isOpen }: IBurgerProps): ReactElement {
  return (
    <Container isOpen={isOpen} onClick={onClick}>
      <div />
      <div />
      <div />
    </Container>
  );
}

export default Burger;
