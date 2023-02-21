import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';

import { Wrapper } from 'components/AppBar/AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Wrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Wrapper>
  );
};
