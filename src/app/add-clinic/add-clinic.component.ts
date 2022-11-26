import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit{
  addClinicForm: clinicForm = new clinicForm();
  
  @ViewChild("clinicForm")
  clinicForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService) { }

  ngOnInit(): void { }

  addClinic(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveClinic(this.clinicForm.value).subscribe((data : any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            alert("Clinic saved successfully.");
            this.router.navigate(['home']);
          }
        }
      }
    )}
    
  }
}

export class clinicForm {
  name: string = "";
  cnpj: string = "";
  especialidade: string = "";
  telefone: string = "";
  cep: string = "";
  endereco: string = "";
  numero: string = "";
  bairro: string = "";
  cidade: string = "";
  estado: string = "";
  status: string = "";
  preco: string = "";
  atendimento : object = { };
}