import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 10px 20px;
`;

export const LinkStyled = styled(NavLink)`
  color: black;
  padding-right: 20px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: orange;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #858585;
  }
`;
