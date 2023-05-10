import { getContactFilter, getContacts } from 'redux/selectors';
import { delContact } from 'redux/contactsSlice';
import {
  ContactListUl,
  ContactListLi,
  ContactListSpan,
  ContactListButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactListUl>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListLi key={id}>
              <ContactListSpan>{name}</ContactListSpan>
              <ContactListSpan>{number}</ContactListSpan>
              <ContactListButton type="button" onClick={() => dispatch(delContact(id))}>
                Delete
              </ContactListButton>
            </ContactListLi>
          );
        })}
      </ContactListUl>
    </>
  );
}
