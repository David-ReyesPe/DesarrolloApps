import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.css'
})
export class SumaComponent {
  numero1 = 0;
  numero2 = 0;

  
  get suma(): number {
    return Number(this.numero1) + Number(this.numero2);
  }
}
