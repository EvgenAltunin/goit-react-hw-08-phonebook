import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 10px 20px;
`;

export const LinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.text};
  padding-right: 20px;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: ${props => props.theme.colors.accentColor};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #${props => props.theme.colors.hoverColor};
  }
`;
