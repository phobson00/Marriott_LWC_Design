import { track, LightningElement } from "lwc";

export default class LandingPageMainSection extends LightningElement {
  @track
  placeholder;

  cityTabHandler() {
    this.placeholder = "Enter Location";
  }

  hotelTabHandler() {
    this.placeholder = "Enter Hotel Name";
  }
}
