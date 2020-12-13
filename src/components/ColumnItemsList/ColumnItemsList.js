import React from 'react';
import PropTypes from 'prop-types';
import ColumnItem from 'components/ColumnItem';
import * as Styled from './ColumnItemsList.styles';

const ColumnItemsList = ({ title, items, columnIndex }) => {
  return (
    <Styled.ColumnItemsList>
      <Styled.ColumnHeader>{title}</Styled.ColumnHeader>
      <Styled.ItemsList>
        {items.map((item, index) => (
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