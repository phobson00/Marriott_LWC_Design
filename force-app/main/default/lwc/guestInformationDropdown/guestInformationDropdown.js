import { LightningElement } from "lwc";

export default class GuestInformationDropdown extends LightningElement {
  showDropdown = false;

  showMenu = false;

  dropdownHandler(event) {
    if (this.showDropdown) {
      this.showDropdown = false;
      event.target.iconName = "utility:chevrondown";
    } else {
      this.showDropdown = true;
      event.target.iconName = "utility:chevronup";
    }
  }

  showDrop() {
    const drop = this.template.querySelector(".slds-dropdown-trigger");

    if (drop.classList.contains("slds-is-open")) {
      drop.classList.remove("slds-is-open");
    } else {
      drop.classList.add("slds-is-open");
    }
  }
}
