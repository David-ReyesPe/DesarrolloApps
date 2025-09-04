import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clase2';
  nombre = '';
  nuevaTarea = '';
  tareas: string[] = [];

  numero1 = 0;
  numero2 = 0;

  agregarObjecto() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(indice: number) {
    this.tareas.splice(indice, 1);
  }

  get suma(): number {
    return Number(this.numero1) + Number(this.numero2);
  }
}
