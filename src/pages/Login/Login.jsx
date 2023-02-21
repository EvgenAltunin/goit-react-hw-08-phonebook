import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LogIn</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
