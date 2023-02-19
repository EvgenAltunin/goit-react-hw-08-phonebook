import {
  ContactEditor,
  Lable,
  Input,
  Submit,
} from 'components/RegisterForm/RegisterForm.styled';


import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
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
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    setName('')
    setEmail('')
    setPassword('')
  };

  return (
    <ContactEditor onSubmit={handleSubmit}>
      <Lable>
        Username
        <Input
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={name}
        />
      </Lable>
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
      <Submit type="submit">SignUp</Submit>
    </ContactEditor>
  );
}
