import styled from '@emotion/styled';
import { colors } from 'styles';

export const Banner = styled.div`
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  background: ${colors.white} linear-gradient(0deg, ${colors.regentGray} 0%, rgba(153,167,185,0.6) 100%);
`;

export const BannerText = styled.h2`
  margin: 0;
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 1.5rem;

  @media screen and (max-width: 48em) {
    font-size: 1.125rem;
  }
`;