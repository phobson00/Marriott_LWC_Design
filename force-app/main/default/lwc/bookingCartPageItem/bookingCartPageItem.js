import { LightningElement } from "lwc";
import marriott_images from "@salesforce/resourceUrl/Marriott_Images";

export default class BookingCartPageItem extends LightningElement {
  image = marriott_images + "/images/marriott_image_1.jpg";

  showSummary = false;

  summaryHandler() {
    return this.showSummary
      ? (this.showSummary = false)
      : (this.showSummary = true);
  }
}
