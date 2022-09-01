import { LightningElement } from "lwc";
import marriott_images from "@salesforce/resourceUrl/Marriott_Images";

export default class HotelSearchParent extends LightningElement {
  image1 = marriott_images + "/images/marriott_image_1.jpg";
  image2 = marriott_images + "/images/marriott_image_2.jpg";

  header1 = "Deluxe Guest Room, 1 King - GENR";
  header2 = "Deluxe Guest Room, 2 Double - DOUB";

  connectedCallback() {
    this.invokeWorkspaceAPI("isConsoleNavigation").then((isConsole) => {
      if (isConsole) {
        this.invokeWorkspaceAPI("getFocusedTabInfo").then((focusedTab) => {
          this.invokeWorkspaceAPI("setTabLabel", {
            tabId: focusedTab.tabId,
            label: "ResApp Hotel List View"
          });
          this.invokeWorkspaceAPI("setTabIcon", {
            tabId: focusedTab.tabId,
            icon: "utility:list"
          });
        });
      }
    });
  }

  invokeWorkspaceAPI(methodName, methodArgs) {
    return new Promise((resolve, reject) => {
      const apiEvent = new CustomEvent("internalapievent", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: {
          category: "workspaceAPI",
          methodName: methodName,
          methodArgs: methodArgs,
          callback: (err, response) => {
            if (err) {
              return reject(err);
            }

            return resolve(response);
          }
        }
      });

      window.dispatchEvent(apiEvent);
    });
  }
}
