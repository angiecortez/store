import { createContext, useContext, useEffect, useReducer } from 'react';
import { cart_reducer as reducer } from '../reducers/cart_reducer';

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CHECKOUT,
} from '../utils/actions';
import toast  from 'react-hot-toast';

const getLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_price: 0,
  total_items: 0,
  isCheckout: false,
};

export const CartContext = createContext<CartState>(null);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  //? Handlers
  const addToCart = (product, amount) => {
    toast.success('Se ha agregado el producto al carrito');
    dispatch({ type: ADD_TO_CART, payload: { product, amount } });
  };

  const removeItem = (id) => {
    toast.error('Se ha eliminado el producto');
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const checkout = () => {
    dispatch({ type: CHECKOUT });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        checkout,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
