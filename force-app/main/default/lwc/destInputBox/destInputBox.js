import { LightningElement } from 'lwc';

export default class SellOptions extends LightningElement {

	showDropdown(event) {
		console.log('here')
		
		var dropdown = this.template.querySelector('.dropdown-content');
		if (dropdown.style.display == "flex") {
			dropdown.style.display = "none";
		}
		else {
			dropdown.style.display = "flex";
		}
		
	}

	changeBtnColor(event) {

		let btn = this.template.querySelector('.content-link-selected');

		if(btn) {
			btn.classList.remove('content-link-selected');
			btn.classList.add('content-link')
		}

		event.target.classList.remove('content-link');
		event.target.classList.add('content-link-selected');
	}
}