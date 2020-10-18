import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  items = [];
  addToInvoice(item) {
    this.items.push(item);
  }
  getItems() { 
    return this.items;
  }
  setInvoiceNumber(number) {
    localStorage.setItem("invoiceNumber", number);
  }
  getInvoiceNumber() {
    return localStorage.getItem("invoiceNumber");  
  }
  clearInvoice() {
    this.items = [];
    return this.items;
  }
  constructor() { }
}
