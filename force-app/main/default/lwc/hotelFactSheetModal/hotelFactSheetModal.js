import { LightningElement, track } from 'lwc';

export default class HotelFactSheetModal extends LightningElement {
    @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

}