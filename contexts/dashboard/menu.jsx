'use client'

import { createContext, useContext, useState } from "react";
const MenuContext = createContext()

export default function MenuProvider({ children }) {
    const [isOpen, setIsOpen] = useState(true);
    return <MenuContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
    </MenuContext.Provider>
}

export const useMenu = () => useContext(MenuContext)