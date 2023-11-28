"use client";

import type { Catagories } from "@/@types/types";
import {
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type ActiveCatagoryContextType = {
  activeCatagory: Catagories;
  setActiveCatagory: Dispatch<SetStateAction<Catagories>>;
};

export const ActiveCatagoryContext =
  createContext<ActiveCatagoryContextType | null>(null);

export default function ActiveCatagoryContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeCatagory, setActiveCatagory] = useState<Catagories>("tech");

  return (
    <ActiveCatagoryContext.Provider
      value={{
        activeCatagory,
        setActiveCatagory,
      }}
    >
      {children}
    </ActiveCatagoryContext.Provider>
  );
}

export const useActiveCatagoryContext = () => {
  const context = useContext(ActiveCatagoryContext);

  if (context === null) {
    throw new Error(
      "useActiveCatagoryContext must be used within an ActiveCatagoryContextProvider"
    );
  }

  return context;
};
