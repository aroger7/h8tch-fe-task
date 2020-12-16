import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ColumnItem from 'components/ColumnItem';
import { itemsContext } from 'providers/ItemsProvider';
import * as Styled from './ColumnItemsList.styles';

const ColumnItemsList = ({ title, items, columnIndex }) => {
  const { search } = useContext(itemsContext);
  const regex = new RegExp(search, 'gi');
  return (
    <Styled.ColumnItemsList>
      <Styled.ColumnHeader>
        <Styled.ColumnHeaderText>
          {title}
        </Styled.ColumnHeaderText>
      </Styled.ColumnHeader>
      <Styled.ItemsList>
        {items.filter(item => item.match(regex)).map((item, index) => (
          <ColumnItem
            key={`column-${columnIndex}-${index}`}
            isOdd={Boolean((index + 1) % 2 === 0)}
            item={item}
            columnIndex={columnIndex}
            itemIndex={index}
          />
        ))}
      </Styled.ItemsList>
    </Styled.ColumnItemsList>
  );
};

ColumnItemsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  columnIndex: PropTypes.number.isRequired
};

export default ColumnItemsList;