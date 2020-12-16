import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'assets/search.svg';
import * as Styled from './ItemSearch.styles';

const ItemSearch = ({searchText, onChange}) => {
  return (
    <Styled.ItemSearch>
      <Styled.ItemSearchLabel 
        htmlFor="item-search-input"
      >
        Search an item
      </Styled.ItemSearchLabel>
      <Styled.ItemSearchInputContainer>
        <Styled.ItemSearchInput
          id="item-search-input"
          name="item-search-input"
          placeholder="Search"
          value={searchText}
          onChange={onChange}
        />
        <SearchIcon />
      </Styled.ItemSearchInputContainer>
    </Styled.ItemSearch>
  )
};

ItemSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ItemSearch;