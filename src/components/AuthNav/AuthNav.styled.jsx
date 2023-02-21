import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: ${props => props.theme.colors.accentColor};
  padding-left: 6px;
  padding-right: 6px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  font-size: 14px;
  border: 3px solid orange;
  border-radius: 4px;
  cursor: pointer;
  &.active {
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.accentColor};
    background-color: ${props => props.theme.colors.accentColor};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${props => props.theme.colors.hoverColor};
    border-color: ${props => props.theme.colors.hoverColor};
  }
`;