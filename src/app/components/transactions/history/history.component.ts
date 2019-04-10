import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { HistoryServices } from '../../../services/historyService';

@Component({
    selector: 'history-mod',
    templateUrl: './history.component.html',
    providers: [ HistoryServices ],
    styleUrls: ['./history.component.scss']
})

export class HistoryComponent {
    private transactionHistory: any = [];
    private searchText: string;
    private showClearButton: boolean;

    //orderby variables
    private orderByType: string;
    private ascending: boolean; 

    @Input() historyData;
    @Output() messageEvent = new EventEmitter<string>();
    @ViewChild('searchTextElm') searchTextElm: ElementRef;

    constructor (private historyServices: HistoryServices) {
        this.orderByType = 'date';
        this.ascending = false;
        this.showClearButton = false;
    }
    ngOnChanges(){
        if (this.historyData) {
            this.transactionHistory = this.historyData;
        }

        this.orderByType = 'date';
        this.ascending = false;
    }

    ngOnInit() {
    }

    showClearSearch() {
        this.showClearButton = true;
    }

    clearSearch() {
        this.searchText = '';
        this.showClearButton = false;
    }

    sortByDate() {
        if (this.orderByType !== 'date') {
            this.orderByType = 'date';
            this.ascending = true;
        }
        else {
            this.ascending = !this.ascending;
        }
    }

    sortByBeneficiary() {
        if (this.orderByType !== 'merchant') {
            this.orderByType = 'merchant';
            this.ascending = true;
        }
        else {
            this.ascending = !this.ascending;
        }
    }

    sortByAmount() {
        if (this.orderByType !== 'amount') {
            this.orderByType = 'amount';
            this.ascending = true;
        }
        else {
            this.ascending = !this.ascending;
        }
    }

    ngOnDelete () {
        // TODO unsubscribe observable
    }
}