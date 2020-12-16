import styled from '@emotion/styled';
import { colors } from 'styles';

export const ColumnItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isOdd }) => isOdd ? '#F1F3F4' : '#BBC0C7'};
  padding-left: 1.5rem;
  padding-right: 1rem;
  height: 4rem;
`;

export const ColumnText = styled.p`
  flex: 1;
  min-width: 0;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
  color: ${({ isOdd }) => isOdd ? colors.primary : colors.white };
  
  @media screen and (max-width: 48rem) {
    font-size: 1rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 2px solid ${({ isOdd }) => isOdd ? colors.primary : colors.white };
  border-radius: 9px;
  width: 2rem;
  height: 2rem;
  padding: 0;
`;