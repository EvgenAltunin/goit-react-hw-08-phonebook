import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import {
  Item,
  ContactText,
  ContactButton,
} from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <Item key={id}>
      <ContactText>
        <BsFillPersonFill
          style={{
            fill: 'orange',
            marginRight: '5px',
            width: '14px',
            height: '14px',
          }}
        />
        {name}
      </ContactText>
      <ContactText>
        <BsTelephoneFill
          style={{
            fill: 'orange',
            marginRight: '5px',
            width: '14px',
            height: '14px',
          }}
        />
        {number}
      </ContactText>
      <ContactButton
        type="button"
        aria-label="Delete contact"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ContactButton>
    </Item>
  );
};
