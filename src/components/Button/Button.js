import styled from '@emotion/styled';
import { colors } from 'styles';

const Button = styled.button`
  border: 4px solid ${colors.white};
  color: ${colors.white};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  background: none;
  cursor: pointer;
  text-transform: uppercase;
  padding: 1.5rem 0;
  font-size: 1.125rem;

  &:hover {
    background: linear-gradient(0deg, #556175 0%, #b5c5d7 100%);
  }
`;

export default Button;