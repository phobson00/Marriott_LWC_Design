import { LightningElement } from "lwc";

export default class BookingCartDropdown extends LightningElement {
  dropMenu() {
    const dropTrigger = this.template.querySelector(
      ".slds-dropdown-trigger_click"
    );

    if (dropTrigger.classList.contains("slds-is-open")) {
      dropTrigger.classList.remove("slds-is-open");
    } else {
      dropTrigger.classList.add("slds-is-open");
    }
  }
}
