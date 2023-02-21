import {
  ContactEditor,
  Lable,
  Input,
  Submit,
} from 'components/RegisterForm/RegisterForm.styled';

import { toast } from 'react-toastify';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/auth.operations';

import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPass, setIsPass] = useState(true);

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
    const password = form.password.value;
    console.log(password.length);
    if (password.length < 7) {
      toast.warning('Password must be at least 7 characters long!');
      return;
    }
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
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
        <div style={{ display: 'flex' }}>
          <Input
            type={isPass ? 'password' : 'text'}
            name="password"
            required
            onChange={handleChange}
            value={password}
          />
          <button
            type="button"
            style={{ display: 'block', border: 'none', cursor:'pointer' }}
            onClick={() => setIsPass(prev => !prev)}
          >
            {isPass ? (
              <RiEyeFill style={{ color: 'orange' }} />
            ) : (
              <RiEyeCloseFill style={{ color: 'orange' }} />
            )}
          </button>
        </div>
      </Lable>
      <NavLink to="/login">Already have account?</NavLink>
      <Submit type="submit">Sign Up</Submit>
    </ContactEditor>
  );
}
