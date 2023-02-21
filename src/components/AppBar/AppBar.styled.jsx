import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid black;
  margin-bottom: 15px;

  @media screen and (min-width: 530px) {
    height: 60px;
  }
`;
