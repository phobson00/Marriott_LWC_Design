import { LightningElement, wire } from 'lwc';
import getCities from '@salesforce/apex/FileLoader.getCities'

export default class destInputBox extends LightningElement {

	initialized = false;

	values;

	@wire(getCities)
    wiredAcitvity({error,data}) {
        if (data) {
            this.values = data;
        } else if (error) {
            this.error = error;
        }
    }
	
	renderedCallback() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;

		// Assigns ID of datalast to input in template
		// IDs that you define in HTML templates may be transformed 
		// into globally unique values when the template is rendered
        let listId = this.template.querySelector('datalist').id;
        this.template.querySelector("input").setAttribute("list", listId);
    }
}