import {
  ContactListUl,
  ContactListLi,
  ContactListSpan,
  ContactListButton,
} from './ContactsList.styled';
import { delContact } from 'redux/contactsSlice';
import { getContacts, getContactsFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);

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
              <ContactListButton
                type="button"
                onClick={() => dispatch(delContact(id))}
              >
                Delete
              </ContactListButton>
            </ContactListLi>
          );
        })}
      </ContactListUl>
    </>
  );
}

ContactsList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

