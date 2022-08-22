import { track, LightningElement } from "lwc";

export default class ParentWithTabs extends LightningElement {
  @track
  placeholder;

  cityTabHandler() {
    this.placeholder = "Enter Location";
  }

  hotelTabHandler() {
    this.placeholder = "Enter Hotel Name";
  }

  connectedCallback() {
    this.invokeWorkspaceAPI("isConsoleNavigation").then((isConsole) => {
      if (isConsole) {
        this.invokeWorkspaceAPI("getFocusedTabInfo").then((focusedTab) => {
          this.invokeWorkspaceAPI("setTabLabel", {
            tabId: focusedTab.tabId,
            label: "ResApp"
          });
          this.invokeWorkspaceAPI("setTabIcon", {
            tabId: focusedTab.tabId,
            icon: "utility:home"
          });
          console.log(focusedTab.tabId);
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
              console.log("err");
              return reject(err);
            }

            console.log("response " + response);
            return resolve(response);
          }
        }
      });

      window.dispatchEvent(apiEvent);
    });
  }
}
