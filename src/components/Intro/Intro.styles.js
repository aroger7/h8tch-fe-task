import styled from '@emotion/styled';
import { colors } from 'styles';

export const Intro = styled.div`
  margin-bottom: 4.5rem;

  @media screen and (max-width: 48em) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  margin-top: 0;
  font-family: 'Merriweather', serif;
  font-style: italic;
  margin-bottom: 2rem;

  @media screen and (max-width: 48em) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${colors.aquamarine};
  max-width: 34.5rem;

  @media screen and (max-width: 48em) {
    font-size: 1.125rem;
  }
`;