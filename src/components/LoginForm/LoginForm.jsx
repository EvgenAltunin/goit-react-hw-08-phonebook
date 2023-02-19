import {
  ContactEditor,
  Lable,
  Input,
  Submit,
} from 'components/LoginForm/LoginForm.styled';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth.operations';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      login({
        email: form.email.value,
        password: form.password.value,
      })
    );

    setEmail('');
    setPassword('');
  };

  return (
    <ContactEditor onSubmit={handleSubmit}>
      <Lable>
        Email
        <Input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
      </Lable>
      <Lable>
        Password
        <Input
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
      </Lable>
      <Submit type="submit">LogIn</Submit>
    </ContactEditor>
  );
}
