import { LightningElement } from 'lwc';

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

		// let btn = this.template.querySelector('.content-btn-selected');

		// if(btn) {
		// 	btn.classList.remove('content-btn-selected');
		// 	btn.classList.add('content-btn')
		// }

		// event.target.parentElement.classList.remove('content-btn');
		// event.target.parentElement.classList.add('content-btn-selected');

		// let link = this.template.querySelector('.content-link-selected');

		// if(link) {
		// 	link.classList.remove('content-link-selected');
		// 	link.classList.add('content-link')
		// }

		// event.target.classList.remove('content-link');
		// event.target.classList.add('content-link-selected');
	}
}