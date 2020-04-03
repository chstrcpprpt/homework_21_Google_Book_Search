import React, { useState, createContext } from "react";

export const SavedContext = createContext();

export const SavedContextProvider = (props) => {
  const [savedBooks, setsavedBooks] = useState([]);
  
  // const handleSearch = (ev) => {
  //   setSearch(ev.target.value);
  // }

  return (
    <SavedContext.Provider value={[savedBooks, setsavedBooks]}>
      {props.children}
    </SavedContext.Provider>
  );
}
