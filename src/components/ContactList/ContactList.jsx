import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsList } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsList>
      {filteredContacts.map(contactInfo => (
        <ContactItem key={contactInfo.id} contact={contactInfo} />
      ))}
    </ContactsList>
  );
};
