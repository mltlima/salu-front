import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:3000/";

var httpLink = {
  getAllClinics: apiUrl + "/api/employee/getAllClinics",
  deleteClinicById: apiUrl + "/api/employee/deleteClinicById",
  getClinicDetailById: apiUrl + "/api/employee/getClinicDetailById",
  saveClinic: apiUrl + "/api/employee/saveClinic"
}
@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllClinics(): Observable<any> {
    return this.webApiService.get(httpLink.getAllClinics);
  }
  public deleteClinicById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteClinicById + '?employeeId=' + model, "");
  }
  public getClinicDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getClinicDetailById + '?employeeId=' + model);
  }
  public saveClinic(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveClinic, model);
  }  
}                          