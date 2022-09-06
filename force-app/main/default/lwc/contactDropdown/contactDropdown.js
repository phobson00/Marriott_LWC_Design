import { LightningElement } from "lwc";

export default class ContactDropdown extends LightningElement {
  showInput = false;

  tabClick(e) {
    const allTabs = this.template.querySelectorAll("ul>li");
    allTabs.forEach((elm, idx) => {
      elm.classList.remove("slds-is-active");
    });
    e.currentTarget.classList.add("slds-is-active");

    if (e.currentTarget.title === "Item One") {
      this.showInput = false;
    } else {
      this.showInput = true;
    }
  }
}
