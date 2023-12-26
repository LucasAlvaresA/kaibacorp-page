import React, { ReactElement } from 'react';
import { Container } from './App.styles';
import { Apps } from './components/sections/apps';
import Resume from './components/sections/resume';
import ContactUs from './components/sections/contactUs';
import { Solutions } from './components/sections/solutions';
import { Offers } from './components/sections/offers';
import Navbar from './components/sections/navbar';
import { Benefits } from './components/sections/benefits';
import AppProvider from './context';

function App(): ReactElement {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <AppProvider>
      <Container>
        <Navbar isOpen={isOpen} />
        <Resume isOpen={isOpen} setIsOpen={setIsOpen} />
        <Benefits />
        <Solutions />
        <Offers />
        <ContactUs />
        <Apps />
      </Container>
    </AppProvider>
  );
}

export default App;
