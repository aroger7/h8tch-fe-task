import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import WhiteCrossIcon from 'assets/cross-white.svg';
import GreyCrossIcon from 'assets/cross-grey.svg';
import { itemsContext } from 'providers/ItemsProvider';
import * as Styled from './ColumnItem.styles';

const ColumnItem = ({ item, columnIndex, itemIndex }) => {
  const { removeItem } = useContext(itemsContext);

  const handleRemoveClick = () => {
    removeItem(columnIndex, itemIndex);
  }

  const isOdd = itemIndex % 2 === 0;

  return (
    <Styled.ColumnItem isOdd={isOdd}>
      <Styled.ColumnText isOdd={isOdd}>
        {item}
      </Styled.ColumnText>
      <Styled.RemoveButton
        isOdd={isOdd}
        onClick={handleRemoveClick}
      >
        {isOdd ? <GreyCrossIcon /> : <WhiteCrossIcon />}
      </Styled.RemoveButton>
    </Styled.ColumnItem>
  )
};

ColumnItem.propTypes = {
  item: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired,
  itemIndex: PropTypes.number.isRequired
};

export default ColumnItem;