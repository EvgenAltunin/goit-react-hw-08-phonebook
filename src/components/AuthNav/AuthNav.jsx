import { LinkStyled } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <div style={{display: "flex", gap: '5px'}}>
      <LinkStyled to="/register">Sign Up</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </div>
  );
};
