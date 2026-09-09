import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);

  const addItem = (item) => {
    setMenuItems((current) => [
      { ...item, id: `${Date.now()}-${current.length}` },
      ...current,
    ]);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addItem }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used inside MenuProvider");
  return context;
}
