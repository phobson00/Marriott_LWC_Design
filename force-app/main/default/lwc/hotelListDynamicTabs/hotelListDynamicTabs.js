import { LightningElement } from "lwc";

export default class HotelListDynamicTabs extends LightningElement {
  numberOfTabs = 2;

  addButton() {
    if (this.numberOfTabs < 5) {
      this.numberOfTabs++;
      this.columnClass = this.columnClasses[this.numberOfTabs - 2];
    }

    this.setIsTabAdd();
  }

  removeButton() {
    if (this.numberOfTabs > 2) {
      this.numberOfTabs--;
      this.columnClass = this.columnClasses[this.numberOfTabs - 2];
    }

    this.setIsTabRemove();
  }

  setIsTabAdd() {
    if (this.numberOfTabs > 2) {
      this.isThreeTab = true;
    }
    if (this.numberOfTabs > 3) {
      this.isFourTab = true;
    }
    if (this.numberOfTabs > 4) {
      this.isFiveTab = true;
    }
  }

  setIsTabRemove() {
    if (this.numberOfTabs < 5) {
      this.isFiveTab = false;
    }
    if (this.numberOfTabs < 4) {
      this.isFourTab = false;
    }
    if (this.numberOfTabs < 3) {
      this.isThreeTab = false;
    }
  }
}
