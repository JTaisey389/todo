import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [displayItems, setDisplayItems] = useState('false');
  const [itemCount, setItemCount] = useState(5);
  const [sortField, setSortField] = useState('difficulty');
  const [startingPage, setStartingPage] = useState(1);

  const state = {
    displayItems,
    itemCount,
    sortField,
    startingPage,
    changeDisplayedItems: setDisplayItems,
    changeItemCount: setItemCount,
    changeSortField: setSortField,
    changePage: setStartingPage,
  }
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}
export default SettingsProvider;