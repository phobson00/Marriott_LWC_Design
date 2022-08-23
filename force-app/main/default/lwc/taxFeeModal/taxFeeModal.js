import { LightningElement, track } from 'lwc';

const columns = [
    { label: 'ID', fieldName: 'id', wrapText: true },
    { label: 'Tax/Fee Name', fieldName: 'taxFee', wrapText: true},
    { label: 'Effective Date', fieldName: 'date', wrapText: true},
    { label: 'Indicators', fieldName: 'indicators', wrapText: true},
    { label: 'Amount', fieldName: 'amount', wrapText: true},
    { label: 'Charge', fieldName: 'charge', wrapText: true},
    { label: 'Frequency', fieldName: 'frequency', wrapText: true}
];

const data = [
    {
        id: 1,
        taxFee: "City / Municpal Tax",
        date: "15DEC15",
        indicators: "E",
        amount: 2.5, 
        charge: "R",
        frequecy: "N",
        wrapText: true
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



