"use client";
import { productsDummyData, userDummyData } from "@/assets/assets";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const [isSeller, setIsSeller] = useState(true);

  const value = {
    currency,
    router,
    isSeller,
    setIsSeller,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
