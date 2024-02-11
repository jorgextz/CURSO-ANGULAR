import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
openAlert:boolean = false;

mostrar_en_consola(name:string){
  console.log('Hola '+ name);
  this.openAlert = true;
}
}
