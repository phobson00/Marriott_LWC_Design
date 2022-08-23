import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class FindButton extends NavigationMixin(LightningElement) {
  handleClick() {
    this[NavigationMixin.Navigate]({
      type: "standard__navItemPage",
      attributes: {
        apiName: "ResApp_Rate_List_View"
      }
    });
  }
}
