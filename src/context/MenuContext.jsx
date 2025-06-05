import { createContext } from "react";
import data from "../assets/data";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  return (
    <MenuContext.Provider value={{ menu: data.menu }}>
      {children}
    </MenuContext.Provider>
  );
}
