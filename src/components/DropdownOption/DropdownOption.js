import styled from '@emotion/styled';
import { colors } from 'styles';

const DropdownOption = styled.option`
  background: ${colors.white};
  color: ${colors.black};
  border-bottom: 16px solid ${colors.primary};
  text-transform: uppercase;

  &:hover {
    background: ${colors.white};
    outline: none;
  }

  &:checked {
    background: red;
  }

  &:not(:last-child) {
    border-bottom: 16px solid ${colors.primary};
  }
`;

export default DropdownOption;