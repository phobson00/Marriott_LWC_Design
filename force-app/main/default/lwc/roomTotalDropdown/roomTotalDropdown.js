import { LightningElement } from "lwc";

export default class RoomTotalDropdown extends LightningElement {
  showDropdown = false;

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
