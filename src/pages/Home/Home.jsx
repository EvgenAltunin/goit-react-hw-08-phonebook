import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div>Home page</div>
    </div>
  );
}
