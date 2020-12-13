import styled from '@emotion/styled';
import { colors } from 'styles';

const Dropdown = styled.select`
  background: #9AA0AB;
  border: 4px solid ${colors.white};
  width: 100%;
  padding: 2rem 1.125rem;
  appearance: none;
  color: ${colors.white};
  text-transform: uppercase;
`;

export default Dropdown;