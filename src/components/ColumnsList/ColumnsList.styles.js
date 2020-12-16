import styled from '@emotion/styled';
import { colors } from 'styles';

export const ColumnsList = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  border: 8px solid ${colors.white};
  box-sizing: border-box;
`;

export const ColumnItemsListWrapper = styled.div`
  flex: 1;
  min-width: 0;

  &:not(:last-child) {
    border-right: 8px solid ${colors.white};
  }
`;
