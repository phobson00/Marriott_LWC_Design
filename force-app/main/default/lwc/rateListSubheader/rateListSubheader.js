import { LightningElement } from "lwc";

export default class RateListSubheader extends LightningElement {
  showDropdown = false;

  dropMenu() {
    return this.showDropdown
      ? (this.showDropdown = false)
      : (this.showDropdown = true);
  }
}
