import { api, LightningElement } from "lwc";

export default class HotelListDynamicTabs extends LightningElement {
  @api
  numberOfTabs;

  tabs = [];

  allTabs = [
    {
      text: "Special Rates",
      value: "Rates",
      id: 1
    },
    {
      text: "Use Points",
      value: "Rates",
      id: 2
    },
    {
      text: "Standard Rates",
      value: "Rates",
      id: 3
    },
    {
      text: "Prepay and Save",
      value: "Rates",
      id: 4
    },
    {
      text: "Deals and Packages",
      value: "Rates",
      id: 5
    }
  ];

  connectedCallback() {
    for (let i = 0; i < this.numberOfTabs; i++) {
      this.tabs.push(this.allTabs[i]);
    }

    console.log(this.tabs[0].text);
  }
}
