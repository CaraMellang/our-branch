import { makeAutoObservable } from 'mobx';
import type { ModalConfig } from '@store/uiModal.d';

export class UiModal {
  isOpen: boolean = false;
  modalConfig: ModalConfig | null = null;
  promiseRef = {
    resolve: (isConfirm: boolean) => {},
    reject: () => {}
  };

  constructor() {
    makeAutoObservable(this);
  }

  getIsOpen() {
    return this.isOpen;
  }
  setIsOpen(open: boolean) {
    this.isOpen = open;
  }

  getModalConfig() {
    return this.modalConfig;
  }
  openModal = (config: ModalConfig) => {
    this.isOpen = true;
    console.log('ㅎㅇ', this.isOpen, config);
    this.modalConfig = config;
    return new Promise((resolve, reject) => {
      this.promiseRef = { resolve, reject };
    });
  };

  testResolver = () => {
    this.promiseRef.resolve(true);
  };

  closeModal() {
    this.isOpen = false;
    this.modalConfig = null;
    this.promiseRef.resolve(false);
  }

  submitModal() {
    this.promiseRef.resolve(true);
    this.isOpen = false;
    this.modalConfig = null;
  }
}
