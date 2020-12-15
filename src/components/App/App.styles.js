import styled from '@emotion/styled';
import { colors } from 'styles';

export const App = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  min-height: 100%;
`;

export const AppBody = styled.div`
  margin: 0 auto;
  padding: 7rem 2rem 3rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 59rem;

  @media screen and (max-width: 48em) {
    padding-top: 5rem;
  }
`;