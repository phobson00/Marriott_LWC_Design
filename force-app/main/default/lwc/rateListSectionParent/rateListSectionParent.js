import { LightningElement } from "lwc";
import marriott_images from "@salesforce/resourceUrl/Marriott_Images";

export default class RateListSectionParent extends LightningElement {
  image1 = marriott_images + "/images/marriott_image_1.jpg";
  image2 = marriott_images + "/images/marriott_image_2.jpg";
  image3 = marriott_images + "/images/marriott_image_3.jpg";

  showMap = false;

  displayMap() {
    if (this.showMap) {
      this.showMap = false;
    } else {
      this.showMap = true;
    }
  }
}
