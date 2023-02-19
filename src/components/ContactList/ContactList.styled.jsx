import styled from 'styled-components'

export const ContactsList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};

  width: calc(100vw - 20px);

  box-shadow: ${props => props.theme.shadow.contactsList};
  border-radius: 4px;

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }

  @media screen and (min-width: 480px) and (max-width: 1200px) {
    max-width: 500px;
  }
`;





