import React, { useState, useContext } from 'react';
import AddItemBanner from 'components/AddItemBanner';
import Button from 'components/Button';
import ColumnsList from 'components/ColumnsList';
import TextBox from 'components/TextBox';
import Dropdown from 'components/Dropdown';
import ItemSearch from 'components/ItemSearch';
import { itemsContext } from 'providers/ItemsProvider';
import * as Styled from './ItemsManager.styles';

const ItemsManager = () => {
  const [itemText, setItemText] = useState('');
  const [selectedColumn, setSelectedColumn] = useState(null);
  const { columns, search, addItem, setSearch } = useContext(itemsContext);

  const handleColumnSelect = (value) => {
    setSelectedColumn(value);
  };

  const handleItemTextChange = (evt) => {
    setItemText(evt.target.value);
  }

  const handleSearchTextChange = (evt) => {
    setSearch(evt.target.value);
  }

  const handleAddItemClick = () => {
    addItem(selectedColumn, itemText);
    setItemText('');
    setSelectedColumn(null);
  }

  return (
    <Styled.ItemsManager>
      <AddItemBanner />
      <Styled.BodyContainer>
        <Styled.ControlsContainer>
          <Styled.ControlsContainerSection>
            <Styled.ItemInputContainer>
              <TextBox
                value={itemText}
                placeholder="Enter Item"
                onChange={handleItemTextChange}
              />
            </Styled.ItemInputContainer>
            <Styled.ColumnDropdownContainer>
              <Dropdown
                placeholder="Choose Column"
                onChange={handleColumnSelect}
                value={selectedColumn}
                options={columns.map((_, index) => ({
                  label: `Column ${index + 1}`,
                  value: index
                }))}
              />
            </Styled.ColumnDropdownContainer>
          </Styled.ControlsContainerSection>
          <Styled.ControlsContainerSection>
            <Styled.AddItemButtonContainer>
              <Button
                disabled={!itemText || (!selectedColumn && selectedColumn !== 0)}
                onClick={handleAddItemClick}
                fullWidth
              >
                Add Item
              </Button>
            </Styled.AddItemButtonContainer>
            <Styled.ItemSearchContainer>
              <ItemSearch searchText={search} onChange={handleSearchTextChange} />
            </Styled.ItemSearchContainer>
          </Styled.ControlsContainerSection>
        </Styled.ControlsContainer>
        <Styled.ColumnsContainer>
          <ColumnsList />
        </Styled.ColumnsContainer>
      </Styled.BodyContainer>
    </Styled.ItemsManager>
  );
};

export default ItemsManager;