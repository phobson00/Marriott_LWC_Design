import { api, LightningElement } from "lwc";

export default class HotelListDynamicTabs extends LightningElement {
  @api
  numberOfTabs;

  tab = {
    specialRates: {
      text: "Special Rates",
      value: "Rates",
      id: 1
    },
    points: {
      text: "Use Points",
      value: "Rates",
      id: 2
    },
    standardRates: {
      text: "Standard Rates",
      value: "Rates",
      id: 3
    },
    prepay: {
      text: "Prepay and Save",
      value: "Rates",
      id: 4
    },
    deals: {
      text: "Deals and Packages",
      value: "Rates",
      id: 5
    }
  };

  tabClasses = ["two-tab", "three-tab", "four-tab", "five-tab"];
  tabClass;

  isTwoTab = false;
  isThreeTab = false;
  isFourTab = false;
  isFiveTab = false;

  connectedCallback() {
    if (this.numberOfTabs >= 2) {
      this.isTwoTab = true;
    }
    if (this.numberOfTabs >= 3) {
      this.isThreeTab = true;
    }
    if (this.numberOfTabs >= 4) {
      this.isFourTab = true;
    }
    if (this.numberOfTabs == 5) {
      this.isFiveTab = true;
    }

    this.tabClass = this.tabClasses[this.numberOfTabs - 2];
  }

  renderedCallback() {}
}
