/**
 * Compare two page references to see if they're equal by looking at API name
 * and URL (which is in state.ws). Page refences are (apparently) unique every
 * time you get a reference to one, so we can't check "===" equality
 */
const arePageRefsEqual = (p1, p2) =>
  p1.attributes.apiName === p2.attributes.apiName &&
  p1.state.ws === p2.state.ws;

const LwcWorkspaceApi = (Base) =>
  class extends Base {
    /**
     * The Workspace API has a method called "getEnclosingTabId" which is
     * only available to Aura, not LWCs. Instead, search all current tabs
     * (including subtabs) for the tab which has a pageReference that matches
     * the one passed in
     */
    getEnclosingTabId = async (currentPageRef) => {
      const allTabs = await this.invokeWorkspaceAPI("getAllTabInfo");

      const enclosingTab = allTabs
        .flatMap((t) => [t, ...t.subtabs])
        .find((t) => arePageRefsEqual(t.pageReference, currentPageRef));

      console.log("enclosing tab", enclosingTab);
      if (!enclosingTab) {
        console.error(
          "Could not find tab for pageReference",
          currentPageRef,
          "looked in",
          allTabs
        );
        throw new Error(
          `Could not find tab for pageReference to set label "${label}"`
        );
      }

      return enclosingTab.tabId;
    };

    /**
     * Set a tab label and icon
     */
    setTabLabel = async (tabId, label, icon) => {
      console.log("setting tab label it", tabId);
      await this.invokeWorkspaceAPI("setTabLabel", { tabId, label });
      await this.invokeWorkspaceAPI("setTabIcon", {
        tabId: tabId,
        icon: icon,
        iconAlt: "Tab Icon"
      });
    };

    isSubTab = async (tabId) => this.invokeWorkspaceAPI("isSubtab", { tabId });

    /**
     * Mimick calling the workspace API using the undocumented
     * "internalapievent"
     */
    invokeWorkspaceAPI = async (methodName, methodArgs = {}) => {
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
    };
  };

export default LwcWorkspaceApi;
