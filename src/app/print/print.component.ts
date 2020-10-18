import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  //arrays
  items;
  settings;

  //data from FormComponent
  invoiceNumber;
  invCity;
  invDate;
  invName;
  invAddress1;
  invAddress2;
  invNip;
  invItemName;
  invItemQuantity;
  invItemPrice;
  invTaxRate;

  totalSumAfterTax;

  //data from SettingsComponent
  sellerName;
  sellerAddress1;
  sellerAddress2;
  sellerNipNumber;
  sellerPerson;

  //for debugging purposes
  arrayFlag: boolean;

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private settingsService: SettingsService) { 
    this.items = this.invoiceService.getItems();
    this.settings = this.settingsService.getSettings();

    if(Array.isArray(this.items) && this.items.length) this.arrayFlag = true;

    this.invoiceNumber    = this.items[0].invoiceNumber;
    this.invCity          = this.items[0].city;
    this.invDate          = this.items[0].date;
    this.invName          = this.items[0].companyName;
    this.invAddress1      = this.items[0].companyAddress1;
    this.invAddress2      = this.items[0].companyAddress2;
    this.invNip           = this.items[0].companyNip;
    this.invItemName      = this.items[0].itemName;
    this.invItemQuantity  = this.items[0].itemQuantity;
    this.invItemPrice     = this.items[0].itemPrice;
    this.invTaxRate       = this.items[0].itemTaxRate;

    this.totalSumAfterTax = this.invItemPrice * (Number(this.invTaxRate)+Number(100))/100;

    this.sellerName       = this.settings.sellerName;
    this.sellerAddress1   = this.settings.address1;
    this.sellerAddress2   = this.settings.address2;
    this.sellerNipNumber  = this.settings.nipNumber;
    this.sellerPerson     = this.settings.personName;
  }

  ngOnInit(): void {
    this.arrayFlag ? console.log(this.items) : console.warn("empty array");
  }

}