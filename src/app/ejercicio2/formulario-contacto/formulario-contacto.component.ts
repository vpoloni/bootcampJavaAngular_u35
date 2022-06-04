import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

  public mensajesError = {
    mensaje: "Introduzca un mensaje",
    email: "Introduzca un email valido",
    nombre: "Introduzca su nombre y apellido",
    validacion: "Validación anti-spam incorrecta"
  }

  public myForm: FormGroup;
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
      email: ["", [Validators.email]],
      mensaje: ["", [Validators.required]],
      respuesta: ["", [this.validacionAntispam()]]
    })
  }

  validacionAntispam(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if(!control.value){
        return null;
      }

      if(control.value == "5"){
        return null
      } else {
        return {validacion: true};
      }
    }
  }

}
