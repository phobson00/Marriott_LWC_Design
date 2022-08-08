import { api, LightningElement } from 'lwc';

export default class SellOptions extends LightningElement {

	@api
	label;

	@api
	firstOption;
}