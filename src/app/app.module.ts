import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { EditClinicComponent } from './edit-clinic/edit-clinic.component';
import { ViewClinicComponent } from './view-clinic/view-clinic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddClinicComponent,
    EditClinicComponent,
    ViewClinicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
