import { track, api, LightningElement } from "lwc";

export default class HotelListing extends LightningElement {
  @api
  image;

  @track
  _showMap;

  set showMap(value) {
    this._showMap = value;
  }

  @api get showMap() {
    return this._showMap;
  }

  buttonSelect(event) {
    const selectedBtn = event.currentTarget;
    const prevBtn = this.template.querySelector(".review-button-selected");

    if (prevBtn) {
      prevBtn.classList.replace("review-button-selected", "review-button");
    }

    if (selectedBtn) {
      selectedBtn.classList.replace("review-button", "review-button-selected");
    }
  }

  whyModalHandler() {
    const dropdown = this.template.querySelector(".dropdown");
    const whyButton = this.template.querySelector(".why-courtyard-button");

    if (dropdown.classList.contains("slds-is-open")) {
      dropdown.classList.remove("slds-is-open");
      whyButton.hidden = false;
    } else {
      dropdown.classList.add("slds-is-open");
      whyButton.hidden = true;
    }
  }
}
