import {
  ContactEditor,
  Lable,
  Input,
  Submit,
} from 'components/ContactForm/ContactForm.styled';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { toast } from 'react-toastify';
import { notificationParams } from 'settings/settings';
import { getContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isContactNameInContactsList = contacts.some(
      contact => contact.name === name
    );

    if (isContactNameInContactsList) {
      toast.warning(`${name} is already in contacts!`, { notificationParams });
    } else {
      dispatch(addContact({ name, number }));
      toast.success(`${name} added to your contacts!`);
    }
    setName('');
    setNumber('');
  };

  return (
    <ContactEditor onSubmit={handleSubmit}>
      <Lable>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </Lable>
      <Lable>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </Lable>
      <Submit type="submit">Add contact</Submit>
    </ContactEditor>
  );
}
