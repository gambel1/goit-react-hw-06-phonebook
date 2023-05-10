import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { AppContainer,  AppTitle } from './App.styled';

export default function App() {
  return (
    <AppContainer>
      <div>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm />
      </div>
      <div>
        <AppTitle>Contacts</AppTitle>
        <Filter />
        <ContactsList />
      </div>
    </AppContainer>
  );
}
