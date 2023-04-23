import { makeAutoObservable } from 'mobx';
import type { SnackBarConfig } from './uiSnackBar.d';

export class UiSnackBar {
  isOpen: boolean = false;
  snackBarConfig: SnackBarConfig | null = null;
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
    return this.snackBarConfig;
  }
  openModal = (config: SnackBarConfig) => {
    this.isOpen = true;
    console.log('ㅎㅇ', this.isOpen, config);
    this.snackBarConfig = config;
    return new Promise((resolve, reject) => {
      this.promiseRef = { resolve, reject };
    });
  };

  testResolver = () => {
    this.isOpen = false;
    this.snackBarConfig = null;
    this.promiseRef.resolve(true);
  };

  closeModal() {
    this.isOpen = false;
    this.snackBarConfig = null;
    this.promiseRef.resolve(false);
  }

  submitModal() {
    this.promiseRef.resolve(true);
    this.isOpen = false;
    this.snackBarConfig = null;
  }
}
