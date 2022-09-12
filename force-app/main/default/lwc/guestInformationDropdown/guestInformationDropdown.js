import { LightningElement } from "lwc";

export default class GuestInformationDropdown extends LightningElement {
  showDropdown = false;

  options1 = ["Home", "Mobile", "Business", "Travel Agent"];

  dropdownHandler(event) {
    if (this.showDropdown) {
      this.showDropdown = false;
      event.target.iconName = "utility:chevrondown";
    } else {
      this.showDropdown = true;
      event.target.iconName = "utility:chevronup";
    }
  }
}
