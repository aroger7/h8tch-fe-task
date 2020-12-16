import styled from '@emotion/styled';
import { colors } from 'styles';

const Button = styled.button`
  border: 4px solid ${colors.white};
  color: ${colors.white};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  background: none;
  text-transform: uppercase;
  padding: 1.5rem 0;
  font-size: 1.125rem;

  &:hover {
    background: linear-gradient(0deg, ${colors.comet} 0%, ${colors.casper} 100%);
  }

  @media screen and (max-width: 48em) {
    font-size: 1rem;
  }
`;

export default Button;