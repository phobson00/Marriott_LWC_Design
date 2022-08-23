import { LightningElement } from "lwc";

export default class WhyCourtyardModal extends LightningElement {
  closeModalHandler() {
    this.dispatchEvent(new CustomEvent("closemodal"));
  }
}
