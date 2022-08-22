import { LightningElement, track } from 'lwc';

const columns = [
    { label: 'ID', fieldName: 'id' },
    { label: 'Tax/Fee Name', fieldName: 'taxFee'},
    { label: 'Effective Date', fieldName: 'date'},
    { label: 'Indicators', fieldName: 'indicators'},
    { label: 'Amount', fieldName: 'amount'},
    { label: 'Charge', fieldName: 'charge'},
    { label: 'Frequency', fieldName: 'frequency'}
];

const data = [
    {
        id: 1,
        taxFee: "City / Municpal Tax",
        date: "15DEC15",
        indicators: "E",
        amount: 2.5, 
        charge: "R",
        frequecy: "N"
    }
];


export default class TaxFeeModal extends LightningElement {
    @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

    columns = columns;
    data = data;

}



