import { LightningElement } from "lwc";
import mastercard_icon from "@salesforce/resourceUrl/MasterCard_Icon";
import visa_icon from "@salesforce/resourceUrl/Visa_Icon";

export default class ProfilePage extends LightningElement {
  mastercardIcon = `${mastercard_icon}#mastercard`;
  visaIcon = `${visa_icon}#visa`;

  connectedCallback() {
    this.invokeWorkspaceAPI("isConsoleNavigation").then((isConsole) => {
      if (isConsole) {
        this.invokeWorkspaceAPI("getFocusedTabInfo").then((focusedTab) => {
          this.invokeWorkspaceAPI("setTabLabel", {
            tabId: focusedTab.tabId,
            label: "ResApp Profile Page"
          });
          this.invokeWorkspaceAPI("setTabIcon", {
            tabId: focusedTab.tabId,
            icon: "utility:user"
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
