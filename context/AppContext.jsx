"use client";
import { productsDummyData, userDummyData } from "@/assets/assets";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const [isSeller, setIsSeller] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    setProducts(productsDummyData);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const value = {
    currency,
    router,
    isSeller,
    setIsSeller,
    products,
    fetchProductData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
