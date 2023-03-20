import { makeAutoObservable } from 'mobx';

export class UiSnackBar {
  isOpen: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  getIsOpen() {
    return this.isOpen;
  }
  setIsOpen(open: boolean) {
    this.isOpen = open;
  }
}
