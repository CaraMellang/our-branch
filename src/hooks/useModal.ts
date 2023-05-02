import React from 'react';
import { useStore } from '@src/store';

export function useModal() {
  const uiModal = useStore().uiModal;

  return uiModal.openModal;
}
