import React, { createContext, useState } from 'react';

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [text, setText] = useState('');

  return (
    <SharedContext.Provider value={{ text, setText }}>
      {children}
    </SharedContext.Provider>
  );
};