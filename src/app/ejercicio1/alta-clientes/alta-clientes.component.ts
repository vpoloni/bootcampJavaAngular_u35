import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-clientes',
  templateUrl: './alta-clientes.component.html',
  styleUrls: ['./alta-clientes.component.css']
})
export class AltaClientesComponent implements OnInit {

  public myForm: FormGroup;
  opciones = [1, 2, 3];
  valoresApasar= [];

  constructor(
   private fb: FormBuilder
  ) { }

  ngOnInit(): void {
   this.crearFormulario();
   console.log("form :", this.myForm);

  }

  guardarClicked(){
    console.log(this.myForm.value);
    this.valoresApasar.push(this.myForm.value);
    this.myForm.reset();
  }

  crearFormulario(){
    this.myForm = this.fb.group({
      nombre: ["", [Validators.required]],
      CIF: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      grupo: ["", [Validators.required]]
    })
  }

}
