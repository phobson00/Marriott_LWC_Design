import { LightningElement } from 'lwc';

export default class ReviewDetailsParent extends LightningElement {

	connectedCallback() {
		this.invokeWorkspaceAPI("isConsoleNavigation").then((isConsole) => {
		  if (isConsole) {
			this.invokeWorkspaceAPI("getFocusedTabInfo").then((focusedTab) => {
			  this.invokeWorkspaceAPI("setTabLabel", {
				tabId: focusedTab.tabId,
				label: "ResApp Review Reservation Details"
			  });
			  this.invokeWorkspaceAPI("setTabIcon", {
				tabId: focusedTab.tabId,
				icon: "utility:record_update"
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
}