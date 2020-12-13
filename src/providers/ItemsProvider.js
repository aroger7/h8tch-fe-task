import React, { createContext, useState } from 'react';

const itemsContext = createContext();
const { Provider } = itemsContext;

const ItemsProvider = ({ children }) => {
  const [columns, setColumns] = useState([[], []]);

  const addItem = (column, item) => {
    if (columns[column]) {
      setColumns([
        ...columns.slice(0, column),
        columns[column].concat([item]),
        ...columns.slice(column + 1)
      ]);
    }
  }

  const removeItem = (column, item) => {
    if (columns[column]) {
      const newColumn = columns[column].filter((_, index) => index !== item);
      setColumns([
        ...columns.slice(0, column),
        newColumn,
        ...columns.slice(column + 1)
      ]);
    }
  }

  return <Provider value={{ columns, addItem, removeItem }}>{children}</Provider>;
}

export { itemsContext, ItemsProvider };