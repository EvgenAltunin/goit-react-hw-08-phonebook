import {
  ContactEditor,
  Lable,
  Input,
  Submit,
  IconEyeOpen,
  IconEyeClose,
  PasswordTogleBtn,
} from 'components/LoginForm/LoginForm.styled';
import { toast } from 'react-toastify';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth.operations';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPass, setIsPass] = useState(true);

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
    const password = form.password.value;

    if (password.length < 7) {
      toast.warning('Password must be at least 7 characters long!');
      return;
    }

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
        <div style={{ display: 'flex' }}>
          <Input
            type={isPass ? 'password' : 'text'}
            name="password"
            required
            title="The password must be at least 7 characters long and contain an uppercase and lowercase letter"
            onChange={handleChange}
            value={password}
          />
          <PasswordTogleBtn type="button" onClick={() => setIsPass(prev => !prev)} >
            {isPass ? <IconEyeOpen /> : <IconEyeClose />}
          </PasswordTogleBtn>
        </div>
      </Lable>
      <Submit type="submit">Log In</Submit>
    </ContactEditor>
  );
}
