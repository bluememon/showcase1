import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: false
})
export class OrderBy{

 transform(array, orderBy, asc = true){
    if (array !== undefined) {
        if (!orderBy || orderBy.trim() == ""){
            return array;
        }

        /// TODO fix object keys acces by brackets, right now somehow is showing undefined error
    
        if (orderBy === 'date') {
            if (asc) {
                return Array.from(array).sort((item1: any, item2: any) => { 
                    return this.orderByComparator(item1['transactionDate'], item2['transactionDate']);
                });
            } else {
                return Array.from(array).sort((item1: any, item2: any) => { 
                    return this.orderByComparator(item2['transactionDate'], item1['transactionDate']);
                });
            }
        }
    
        if (orderBy === 'merchant') {
            if (asc) {
            return Array.from(array).sort((item1: any, item2: any) => { 
                    return this.orderByComparator(item1['merchant'], item2['merchant']);
                });
            } else {
            return Array.from(array).sort((item1: any, item2: any) => { 
                return this.orderByComparator(item2['merchant'], item1['merchant']);
            });
            }
        }
    
        if (orderBy === 'amount') {
            if (asc) {
            return Array.from(array).sort((item1: any, item2: any) => { 
                    return this.orderByComparator(item1['amount'], item2['amount']);
                });
            } else {
            return Array.from(array).sort((item1: any, item2: any) => { 
                return this.orderByComparator(item2['amount'], item1['amount']);
            });
            }
        }
    
    }
 }

 orderByComparator(a:any, b:any):number{
    if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
    //Isn't a number so lowercase the string to properly compare
    if(a.toLowerCase() < b.toLowerCase()) return -1;
    if(a.toLowerCase() > b.toLowerCase()) return 1;
    }
    else{
    //Parse strings as numbers to compare properly
    if(parseFloat(a) < parseFloat(b)) return -1;
    if(parseFloat(a) > parseFloat(b)) return 1;
    }

    return 0; //equal each other
}
}