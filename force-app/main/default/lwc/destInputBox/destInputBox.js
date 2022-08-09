import { LightningElement } from 'lwc';

export default class SellOptions extends LightningElement {

	initialized = false;

	values = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque"];
	
	renderedCallback() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        let listId = this.template.querySelector('datalist').id;
        this.template.querySelector("input").setAttribute("list", listId);
    }
}