import { Component } from '@angular/core';


@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  text_color:string = '';
  button_disabled:boolean = true;
  src:String = 'https://i.blogs.es/0ca9a6/aa/1366_2000.webp';

}
