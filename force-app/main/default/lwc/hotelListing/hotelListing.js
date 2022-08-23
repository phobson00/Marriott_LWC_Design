import { track, api, LightningElement } from "lwc";

export default class HotelListing extends LightningElement {
  @api
  image;

  @track
  _showMap;

  showWhyModal = false;

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
    return this.showWhyModal
      ? (this.showWhyModal = false)
      : (this.showWhyModal = true);
  }
}
