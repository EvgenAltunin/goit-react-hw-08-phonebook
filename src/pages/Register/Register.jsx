import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
