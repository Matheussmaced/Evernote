import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-header',
  templateUrl: './button-header.component.html',
  styleUrl: './button-header.component.css'
})
export class ButtonHeaderComponent {
  @Input() name:string = "";
}
