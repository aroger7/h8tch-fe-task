import styled from '@emotion/styled';
import { colors } from 'styles';

const TextBox = styled.input`
  border: 4px solid ${colors.white};
  background: #9AA0AB;
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem 1rem;
  color: ${colors.white};
  text-transform: uppercase;

  &::placeholder {
    color: #D1D3D8;
    text-transform: uppercase;
  }
`;

export default TextBox;