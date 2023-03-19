import { createContext, useContext } from 'react';

const store = {};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
  // return store;
};
export default store;
