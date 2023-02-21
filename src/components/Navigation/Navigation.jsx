import { LinkStyled, Nav } from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <LinkStyled to="/">Home</LinkStyled>
      {isLoggedIn && <LinkStyled to="/contacts">Phonebook</LinkStyled>}
    </Nav>
  );
};
