import styled from '@emotion/styled';
import { colors } from 'styles';

const TextBox = styled.input`
  border: 4px solid ${colors.white};
  background: ${colors.grayChateau};
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem 1rem;
  color: ${colors.white};
  text-transform: uppercase;

  &::placeholder {
    color: ${colors.iron};
    text-transform: uppercase;
  }
`;

export default TextBox;