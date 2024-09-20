import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-body',
  templateUrl: './button-body.component.html',
  styleUrl: './button-body.component.css'
})
export class ButtonBodyComponent {
  @Input() name:string = ""
}
