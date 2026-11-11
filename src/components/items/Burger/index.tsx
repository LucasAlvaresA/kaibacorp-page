import { ReactElement } from 'react';
import { IBurgerProps } from './Burger.structure';
import { Container } from './styles';

function Burger({ onClick, isOpen }: IBurgerProps): ReactElement {
  return (
    <Container
      type="button"
      isOpen={isOpen}
      onClick={onClick}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={isOpen}
    >
      <div />
      <div />
      <div />
    </Container>
  );
}

export default Burger;
