import { api, LightningElement } from 'lwc';

export default class SellOptions extends LightningElement {

	showDropdown(event) {
			var dropdowns = this.template.querySelectorAll('.dropdown-content');
			var i;
			for (i = 0; i < dropdowns.length; i++) {
			  var openDropdown = dropdowns[i];
			  if (openDropdown.style.display == "flex") {
				openDropdown.style.display = "none";
			  }
			  else {
				openDropdown.style.display = "flex";
			  }
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