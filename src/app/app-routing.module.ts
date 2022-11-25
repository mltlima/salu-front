import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { EditClinicComponent } from './edit-clinic/edit-clinic.component';
import { ViewClinicComponent } from './view-clinic/view-clinic.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'add-clinic', component: AddClinicComponent },
  { path: 'edit-clinic/:id', component: EditClinicComponent },
  { path: 'view-clinic/:id', component: ViewClinicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
