import { makeAutoObservable } from 'mobx';
import type { ModalConfig, ModalValueType } from '@store/uiModal.d';

export class UiModal {
  isOpen: boolean = false;
  modalConfig: ModalConfig | null = null;
  promiseRef = {
    resolve: (value: ModalValueType) => {},
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

  openPrompt(config: Omit<ModalConfig, 'variant'>) {
    this.isOpen = true;
    this.modalConfig = { ...config, variant: 'prompt' };
    return new Promise((resolve, reject) => {
      this.promiseRef = { resolve, reject };
    });
  }
  openConfirm(config: Omit<ModalConfig, 'variant'>) {
    this.isOpen = true;
    this.modalConfig = { ...config, variant: 'confirm' };
    return new Promise((resolve, reject) => {
      this.promiseRef = { resolve, reject };
    });
  }
  openAlert(config: Omit<ModalConfig, 'variant'>) {
    this.isOpen = true;
    this.modalConfig = { ...config, variant: 'alert' };
    return new Promise((resolve, reject) => {
      this.promiseRef = { resolve, reject };
    });
  }

  testResolver = (value: ModalValueType) => {
    this.isOpen = false;
    this.modalConfig = null;
    this.promiseRef.resolve(value);
  };

  closeModal() {
    this.isOpen = false;
    this.modalConfig = null;
    this.promiseRef.resolve(false);
  }

  submitModal(value: ModalValueType) {
    this.promiseRef.resolve(value);
    this.isOpen = false;
    this.modalConfig = null;
  }
}
