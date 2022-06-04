import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios-enviados',
  templateUrl: './formularios-enviados.component.html',
  styleUrls: ['./formularios-enviados.component.css']
})
export class FormulariosEnviadosComponent implements OnInit {

  @Input() valoresFormulario: any;
  constructor() { }

  ngOnInit(): void {
  }

}
