import { LightningElement } from "lwc";

export default class BookingCartDropdown extends LightningElement {
  emptyCart = true;
  cartLabel = "Cart (0)";

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

  emptyCartHandler() {
    if (this.emptyCart) {
      this.emptyCart = false;
      this.cartLabel = "Cart (3)";
    } else {
      this.emptyCart = true;
      this.cartLabel = "Cart (0)";
    }
  }
}
