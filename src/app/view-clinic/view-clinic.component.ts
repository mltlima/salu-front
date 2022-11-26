import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-clinic',
  templateUrl: './view-clinic.component.html',
  styleUrls: ['./view-clinic.component.css']
})
export class ViewClinicComponent implements OnInit {

  id: any;
  clinicDetail: any = [];

  constructor (private httpProvider: HttpProviderService, private webApiService: WebApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getClinicDetailById();
  }

  getClinicDetailById() {       
    this.httpProvider.getClinicDetailById(this.id).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.clinicDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }
}
