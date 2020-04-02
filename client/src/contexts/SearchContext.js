import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
  const [search, setSearch] = useState("");
  
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  }

  return (
    <SearchContext.Provider value={[search, setSearch, handleSearch]}>
      {props.children}
    </SearchContext.Provider>
  );
}
