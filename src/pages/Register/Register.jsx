import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export default function Register() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SignUp</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <RegisterForm />
      </div>
    );
}
