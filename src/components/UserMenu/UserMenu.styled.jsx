import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;


  @media screen and (min-width: 530px) {
    gap: 20px;
  }
`;

export const LogoutBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 80px;
  border: 3px solid;
  border-color: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.accentColor};
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.hoverColor};
    color: ${props => props.theme.colors.hoverColor};
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
  min-width: 115px;
  font-size: 14px;

  @media screen and (min-width: 480px) and (max-width: 1199px) {
    font-size: inherit;
    min-width: 120px;
  }
  @media screen and (min-width: 1200px) {
    font-size: inherit;
    min-width: 240px;
  }
`;

