import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm:FormGroup;
  settingsArray;
  constructor(private settingsService: SettingsService, private formBuilder: FormBuilder, private router: Router) { 
    this.settingsArray = this.settingsService.getSettings()
    console.log(this.settingsArray)
    if(Array.isArray(this.settingsArray) || this.settingsArray.length) {
      this.settingsForm = this.formBuilder.group( {
        sellerName: this.settingsArray.sellerName,
        address1: this.settingsArray.address1,
        address2: this.settingsArray.address2,
        nipNumber: this.settingsArray.nipNumber,
        personName: this.settingsArray.personName
      });
    } else {
      this.settingsForm = this.formBuilder.group( {
        sellerName: '',
        address1: '',
        address2: '',
        nipNumber: '',
        personName: ''
      });
    }
  }

  ngOnInit(): void {
  }

  onSubmit(settingsForm) {
    this.settingsService.save(settingsForm);
    alert("Ustawienia zapisane");
    this.router.navigate(['']);
  }

}
