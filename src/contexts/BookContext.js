import React, { useContext, useState, createContext } from 'react';

const BookContext = createContext();

export function useBookContext() {
  return useContext(BookContext);
}

export function BookProvider({ children }) {
  const [currentBook, setCurrentBook] = useState();

  function handleBookChange() {}

  const value = {
    currentBook,
    handleBookChange,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}
