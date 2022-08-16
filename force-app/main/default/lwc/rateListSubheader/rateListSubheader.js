import { LightningElement } from "lwc";

export default class RateListSubheader extends LightningElement {
  dropMenu() {
    const dropTrigger = this.template.querySelector(".dropdown-main");

    if (dropTrigger.classList.contains("dropdown-open")) {
      dropTrigger.classList.remove("dropdown-open");
      dropTrigger.classList.add("dropdown-closed");
    } else {
      dropTrigger.classList.remove("dropdown-closed");
      dropTrigger.classList.add("dropdown-open");
    }
  }
}
