import React, { useContext } from 'react';
import ColumnItemsList from 'components/ColumnItemsList';
import { itemsContext } from 'providers/ItemsProvider';
import * as Styled from './ColumnsList.styles';

const ColumnsList = () => {
  const { columns } = useContext(itemsContext);
  return (
    <Styled.ColumnsList>
      {columns.map((column, index) => (
        <Styled.ColumnItemsListWrapper key={`column-${index}`}>
          <ColumnItemsList
            title={`Column ${index + 1}`}
            items={column}
            columnIndex={index}
          />
        </Styled.ColumnItemsListWrapper>
      ))}
    </Styled.ColumnsList>
  );
};

export default ColumnsList;