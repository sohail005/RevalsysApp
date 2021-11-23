import React, { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
