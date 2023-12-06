import React, { createContext, useState, useReducer, useEffect } from "react";
import { MdOutlineCallToAction } from "react-icons/md";
let storedCart = localStorage.getItem("cart");
if (storedCart) storedCart = JSON.parse(storedCart);
export const AppContext = createContext({ cart: storedCart || [] });

const findItem = (existingItems, item) => {
  return existingItems.find((value) => value.id == item.id);
};
const AppContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        let payload = { ...action.payload, count: 1 };
        console.log(payload);
        if (state.cart.length === 0 || !findItem(state.cart, action.payload)) {
          return {
            cart: [...state.cart, payload],
          };
        }
        return state;

      case "INCRE":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      case "DECRE":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, count: item.count - 1 }
              : item
          ),
        };
      default:
        return state;
    }
  };

  const [appState, setAppState] = useReducer(reducer, {
    cart: storedCart || [],
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(appState?.cart));
  }, [JSON.stringify(appState)]);

  return (
    <AppContext.Provider value={{ ...appState, dispatch: setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;