import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  title = 'desafio-salu';
  clinicsList: any = [];

  constructor(private router: Router, private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.getAllClinics();
  }

  async getAllClinics() {
    this.httpProvider.getAllClinics().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          console.log(resultData);
          this.clinicsList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.clinicsList = [];
            }
          }
        }
      });
  }

  addClinic() {
    this.router.navigate(['add-clinic']);
  }

  deleteClinic(clinic: any) {
    this.httpProvider.deleteClinicById(clinic.id).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData != null && resultData.isSuccess) {
          alert("Clinic deleted successfully.");
          this.getAllClinics();
        }
      }
    },
    (error : any) => {});
  }
}
