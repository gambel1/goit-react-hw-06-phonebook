import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { AppDiv, AppTitle } from './App.styled';

export default function App() {
  return (
    <>
      <AppDiv>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm />
      </AppDiv>
      <AppDiv>
        <AppTitle>Contacts</AppTitle>
        <Filter />
        <ContactsList />
      </AppDiv>
    </>
  );
}
