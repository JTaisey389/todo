import React, { useState, useEffect, useContext } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [hideCompletedItems, setHideCompletedItems] = useState(true);
  const [sortItems, setSortItems] = useState('difficulty');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const state = {
    hideCompletedItems,
    setHideCompletedItems,
    itemsPerPage,
    setItemsPerPage,
    sortItems,
    setSortItems,
    currentPage,
    setCurrentPage,
  }
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}
export default SettingsProvider;