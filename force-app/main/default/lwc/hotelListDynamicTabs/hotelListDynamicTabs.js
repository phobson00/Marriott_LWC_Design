/* eslint-disable guard-for-in */
import { LightningElement } from "lwc";

export default class HotelListDynamicTabs extends LightningElement {
  numberOfTabs = 2;

  tabClass =
    "slds-tabs_default__item slds-border_right slds-border_left slds-size_1-of-2";

  isThreeTab = false;
  isFourTab = false;
  isFiveTab = false;

  addTab() {
    if (this.numberOfTabs < 5) {
      this.numberOfTabs++;
    }

    this.setIsTabAdd();
  }

  removeTab() {
    if (this.numberOfTabs > 2) {
      this.numberOfTabs--;
    }

    this.setIsTabRemove();
  }

  setIsTabAdd() {
    if (this.numberOfTabs == 3) {
      this.isThreeTab = true;
    } else if (this.numberOfTabs == 4) {
      this.isFourTab = true;
    } else if (this.numberOfTabs == 5) {
      this.isFiveTab = true;
    }

    this.tabClass = this.tabClass.replace(
      this.numberOfTabs - 1,
      this.numberOfTabs
    );
  }

  setIsTabRemove() {
    if (this.numberOfTabs == 4) {
      this.isFiveTab = false;
    } else if (this.numberOfTabs == 3) {
      this.isFourTab = false;
    } else if (this.numberOfTabs == 2) {
      this.isThreeTab = false;
    }

    this.tabClass = this.tabClass.replace(
      this.numberOfTabs + 1,
      this.numberOfTabs
    );
  }
}
