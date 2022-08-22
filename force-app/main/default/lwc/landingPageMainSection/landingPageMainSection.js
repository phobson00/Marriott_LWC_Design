import { track, LightningElement, api } from "lwc";

export default class LandingPageMainSection extends LightningElement {
  @track
  placeholder;

  @api
  column1;

  @api
  column2;

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
