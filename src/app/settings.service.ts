import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  savedSettings = [];
  save(settings) {
    localStorage.setItem("sellerName", settings.sellerName);
    localStorage.setItem("address1", settings.address1);
    localStorage.setItem("address2", settings.address2);
    localStorage.setItem("nipNumber", settings.nipNumber);
    localStorage.setItem("personName", settings.personName);
  }
  getSettings() {
    this.savedSettings['sellerName'] = localStorage.getItem("sellerName"); 
    this.savedSettings['address1'] = localStorage.getItem("address1");     
    this.savedSettings['address2'] = localStorage.getItem("address2"); 
    this.savedSettings['nipNumber'] = localStorage.getItem("nipNumber"); 
    this.savedSettings['personName'] = localStorage.getItem("personName"); 
    return this.savedSettings;
  }
  clearSettings() {
    this.savedSettings = [];
    return this.savedSettings;
  }
  constructor() { }
}
