import { track, api, LightningElement } from "lwc";

export default class HotelListing extends LightningElement {
  @api
  image;

  @track
  _showMap;

  set showMap(value) {
    this._showMap = value;
  }

  @api get showMap() {
    return this._showMap;
  }
}
