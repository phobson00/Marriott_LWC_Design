import { LightningElement } from "lwc";

export default class TravelPlannerDropdown extends LightningElement {
  showMenu = false;

  dropMenu() {
    return this.showMenu ? (this.showMenu = false) : (this.showMenu = true);
  }
}
