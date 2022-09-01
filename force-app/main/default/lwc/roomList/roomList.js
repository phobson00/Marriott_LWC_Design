import { api, LightningElement } from "lwc";

export default class RoomList extends LightningElement {
  @api
  image;

  @api
  header;

  @api
  memberRate;

  @api
  flexibleRate;
}
