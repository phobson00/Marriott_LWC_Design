import { LightningElement } from "lwc";

export default class HotelListSubheader extends LightningElement {
  showDropdown = false;

  dropMenu() {
    return this.showDropdown
      ? (this.showDropdown = false)
      : (this.showDropdown = true);
  }
}
