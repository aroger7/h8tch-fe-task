import styled from '@emotion/styled';
import { colors } from 'styles';

export const ItemSearch = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemSearchLabel = styled.label`
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const ItemSearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.grayChateau};
  border: 4px solid ${colors.white};
  padding: 1rem;
`;

export const ItemSearchInput = styled.input`
  flex: 1;
  color: ${colors.white};
  text-transform: uppercase;
  background: none;
  border: none;
  padding: 0;
  margin-right: 0.5rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.iron};
    text-transform: uppercase;
  }
`;