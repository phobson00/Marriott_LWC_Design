import { LightningElement } from 'lwc';

export default class SellOptions extends LightningElement {

	dropMenu() {

		const dropTrigger = this.template.querySelector('.slds-dropdown-trigger_click');

		if(dropTrigger.classList.contains('slds-is-open')) {
			dropTrigger.classList.remove('slds-is-open')
		}
		else {
			dropTrigger.classList.add('slds-is-open')
		}
	}

	buttonSelect(event) {

		const selectedBtn = event.currentTarget;
		const prevBtn = this.template.querySelector('.list-button-selected');

		if(prevBtn) {
			prevBtn.classList.replace('list-button-selected', 'list-button');
		}

		if(selectedBtn) {
			selectedBtn.classList.replace('list-button', 'list-button-selected');
		}
	}


}