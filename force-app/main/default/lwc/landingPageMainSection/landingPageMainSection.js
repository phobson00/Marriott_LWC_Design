import { track, LightningElement, api } from "lwc";

export default class LandingPageMainSection extends LightningElement {
  @track
  placeholder;

  @api
  column1;

  @api
  column2;

  cityTabHandler() {
    this.placeholder = "Enter Location";
  }

  hotelTabHandler() {
    this.placeholder = "Enter Hotel Name";
  }
}
