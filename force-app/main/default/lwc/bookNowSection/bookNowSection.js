/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement, track } from "lwc";

export default class BookNowSection extends LightningElement {
  @track showStartBtn = true;
  @track timeVal = "15:00";
  timeIntervalInstance;
  totalMilliseconds = 900000;

  connectedCallback() {
    this.showStartBtn = false;
    let parentThis = this;

    // Run timer code in every 100 milliseconds
    this.timeIntervalInstance = setInterval(function () {
      // Time calculations for hours, minutes, seconds and milliseconds
      var minutes = Math.floor(
        (parentThis.totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor(
        (parentThis.totalMilliseconds % (1000 * 60)) / 1000
      );

      // Output the result in the timeVal variable
      parentThis.timeVal = minutes + ":" + seconds;

      parentThis.totalMilliseconds -= 100;
    }, 100);
  }
}
