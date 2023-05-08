import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import useLocalStorage from '../hooks/useLocalStorage';

import { useState, useEffect } from 'react';


export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = event => {
    setContacts(prevContacts => {
      if (
        prevContacts.find(
          contact => contact.name.toLowerCase() === event.name.toLowerCase()
        )
      ) {
        alert(`${event.name} is already in contacts`);
        return prevContacts;
      }
      return [event, ...prevContacts];
    });
  };

  const filterContact = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteFilterContactId = nameId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== nameId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleChange} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} filterContact={filterContact} />
      <ContactsList
        deleteContacts={deleteFilterContactId}
        filteredContacts={filteredContacts}
      />
    </div>
  );
}
