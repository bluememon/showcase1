import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainHeaderComponent } from './components/header/header.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { HistoryComponent } from './components/transactions/history/history.component';
import { TransferComponent } from './components/transactions/transfer/transfer.component';

import { ClickElsewhereDirective } from './directives/clickElsewhere.directive';

import { HistoryServices } from './services/historyService';

import { FilterPipe } from './components/transactions/history/search.pipe';
import { OrderBy } from './components/transactions/history/orderBy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    TransactionsComponent,
    HistoryComponent,
    TransferComponent,
    FilterPipe,
    OrderBy,
    ClickElsewhereDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HistoryServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
