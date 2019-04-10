import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionObject } from '../models/transaction';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class HistoryServices{ 
    configUrl = 'assets/transactions.json';
    private dataSubject = new ReplaySubject<any>();
    data$: Observable<any> = this.dataSubject.asObservable();

    constructor(private http: HttpClient) {}

    getConfig() {
        return this.http.get(this.configUrl);
    }

    fetch() {
        this.http.get(this.configUrl).subscribe(res => this.dataSubject.next(res));
    }

    addTransaction(transactions) {
        this.dataSubject.next(transactions);
        console.log(this.dataSubject);
    }
}