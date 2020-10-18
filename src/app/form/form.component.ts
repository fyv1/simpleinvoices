import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  checkoutForm:FormGroup;
  invNumbTemp;
  constructor(private invoiceService: InvoiceService, private formBuilder: FormBuilder, private router: Router) { 
    if(invoiceService.getInvoiceNumber() == null) invoiceService.setInvoiceNumber(1); 
    if(invoiceService.getInvoiceNumber().length!=0) 
      this.invNumbTemp = invoiceService.getInvoiceNumber(); 
    else 
      this.invNumbTemp = '';
    
    this.checkoutForm = this.formBuilder.group( {
      invoiceNumber: this.invNumbTemp,
      city: '',
      date: '',
      companyName: '',
      companyAddress1: '',
      companyAddress2: '',
      companyNip: '',
      itemName: '',
      itemQuantity: '',
      itemPrice: '',
      itemTaxRate: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(checkoutForm) {
    this.invoiceService.addToInvoice(checkoutForm);
    this.invoiceService.setInvoiceNumber(Number(this.invNumbTemp)+Number(1))
    this.router.navigate(['print']);
  }

}
