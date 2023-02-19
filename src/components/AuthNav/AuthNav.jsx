import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div style={{display: "flex", gap: '5px'}}>
      <NavLink to="/register">SignUp</NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </div>
  );
};
