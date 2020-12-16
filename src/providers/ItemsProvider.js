import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from 'hooks/useLocalStorage';

const itemsContext = createContext();
const { Provider } = itemsContext;

const ItemsProvider = ({ children }) => {
  const [columns, setColumns] = useLocalStorage('h8tch-columns', [[], []]);
  const [search, setSearch] = useState('');

  const addItem = (column, item) => {
    if (columns[column]) {
      setColumns([
        ...columns.slice(0, column),
        columns[column].concat([item]),
        ...columns.slice(column + 1)
      ]);
    }
  };

  const removeItem = (column, item) => {
    if (columns[column]) {
      const newColumn = columns[column].filter((_, index) => index !== item);
      setColumns([
        ...columns.slice(0, column),
        newColumn,
        ...columns.slice(column + 1)
      ]);
    }
  };

  return <Provider value={{ columns, addItem, removeItem, search, setSearch }}>{children}</Provider>;
}

ItemsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export { itemsContext, ItemsProvider };