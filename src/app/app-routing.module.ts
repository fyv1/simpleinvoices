import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PrintComponent } from './print/print.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '',   redirectTo: 'form', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'print', component: PrintComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
