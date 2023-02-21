import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div>
        <h1 style={{ textAlign: 'center' }}>Hello!</h1>
        <p style={{ textAlign: 'center' }}>
          Welcome to our website, where you can easily create and manage your
          own phone book! Register today and start adding your contacts,
          organizing them into groups, and accessing your phone book from any
          device. Say goodbye to the hassle of losing contacts or switching
          phones, and say hello to the convenience of having all your important
          information in one place. Sign up now and never lose a contact again!
        </p>
      </div>
    </div>
  );
}
