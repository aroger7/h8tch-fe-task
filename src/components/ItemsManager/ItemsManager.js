import React, { useState, useContext } from 'react';
import AddItemBanner from 'components/AddItemBanner';
import Button from 'components/Button';
import ColumnsList from 'components/ColumnsList';
import TextBox from 'components/TextBox';
import Dropdown from 'components/Dropdown';
import DropdownOption from 'components/DropdownOption';
import { itemsContext } from 'providers/ItemsProvider';
import * as Styled from './ItemsManager.styles';

const ItemsManager = () => {
  const [itemText, setItemText] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const { columns, addItem } = useContext(itemsContext);

  const handleColumnSelect = (evt) => {
    setSelectedColumn(evt.target.value);
  };

  const handleItemTextChange = (evt) => {
    setItemText(evt.target.value);
  }

  const addItemClick = () => {
    addItem(selectedColumn, itemText);
    setItemText('');
    setSelectedColumn('');
  }

  return (
    <Styled.ItemsManager>
      <AddItemBanner />
      <Styled.BodyContainer>
        <Styled.ControlsContainer>
          <Styled.ItemInputContainer>
            <TextBox
              value={itemText}
              placeholder="Enter Item"
              onChange={handleItemTextChange}
            />
          </Styled.ItemInputContainer>
          <Styled.ColumnDropdownContainer>
            <Dropdown placeholder="Choose Column" onChange={handleColumnSelect} value={selectedColumn}>
              <DropdownOption value="" disabled hidden>Choose Column</DropdownOption>
              {columns.map((_, index) => (
                <DropdownOption 
                  value={index} 
                  key={`column-option-${index}`}
                >
                  {`Column ${index + 1}`}
                </DropdownOption>
              ))}
            </Dropdown>
          </Styled.ColumnDropdownContainer>
          <Button
            disabled={!Boolean(itemText && selectedColumn)}
            onClick={addItemClick}
            fullWidth
          >
            Add Item
          </Button>
        </Styled.ControlsContainer>
        <Styled.ColumnsContainer>
          <ColumnsList />
        </Styled.ColumnsContainer>
      </Styled.BodyContainer>
    </Styled.ItemsManager>
  );
};

export default ItemsManager;