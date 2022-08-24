import { track, LightningElement } from "lwc";

export default class LandingPageMainSection extends LightningElement {
  @track
  placeholder;

  error = false;

  cityTabHandler() {
    this.placeholder = "Enter Location";
  }

  hotelTabHandler() {
    this.placeholder = "Enter Hotel Name";
  }

  errorHandler() {
    return this.error ? (this.error = false) : (this.error = true);
  }
}
