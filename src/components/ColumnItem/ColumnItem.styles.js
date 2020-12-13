import styled from '@emotion/styled';
import { colors } from 'styles';

export const ColumnItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isOdd }) => isOdd ? '#F1F3F4' : '#BBC0C7'};
  padding-left: 1.5rem;
  padding-right: 1rem;
`;

export const ColumnText = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ isOdd }) => isOdd ? colors.primary : colors.white };
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
  border: 2px solid ${({ isOdd }) => isOdd ? colors.primary : colors.white };
  border-radius: 9px;
  width: 2rem;
  height: 2rem;
`;