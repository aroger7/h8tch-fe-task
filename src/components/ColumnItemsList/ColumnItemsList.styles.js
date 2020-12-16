import styled from '@emotion/styled';
import { colors } from 'styles';

export const ColumnItemsList = styled.div`
  flex: 1;
`;

export const ColumnHeader = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  padding: 1.5rem 0;
  text-align: center;
  background: linear-gradient(0deg, ${colors.riverBed} 0%, ${colors.pigeonPost} 100%);
  color: ${colors.white};
  text-transform: uppercase;
`;

export const ColumnHeaderText = styled.p`
  color: ${colors.white};
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
`;

export const ItemsList = styled.ul`
  flex: 1;
  list-style: none;
  min-width: 0;
  padding: 0;
  margin: 0;
  height: 28rem;
  overflow-x: hidden;
  overflow-y: auto;
`;