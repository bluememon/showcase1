import { Component, Output, EventEmitter } from "@angular/core";
import { HistoryServices } from '../../services/historyService';

@Component({
    selector: 'transactions-mod',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent {
    public transactionHistory = {};
    constructor (private historyServices: HistoryServices) {
    }

    ngOnInit () {
        this.loadTransactions();
    }

    loadTransactions() {
        this.historyServices.getConfig()
        .subscribe((data) => {
            this.transactionHistory = data;
        });
    }
}