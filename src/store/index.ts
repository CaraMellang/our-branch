import { createContext, useContext } from 'react';
import { UiModal } from '@store/uiModal';
import { UiSnackBar } from '@store/uiSnackBar';

const store = {
  uiModal: new UiModal(),
  uiSnackBar: new UiSnackBar()
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};
export default store;
