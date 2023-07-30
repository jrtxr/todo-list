import { createContext, useState } from "react";

export const ModalsContext = createContext();

export const ModalsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalsContext.Provider
      value={{
        isOpen: isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
