import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  title = 'clase2';
  nombre = '';
  nuevaTarea = '';
  tareas: string[] = [];

  agregarObjecto() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(indice: number) {
    this.tareas.splice(indice, 1);
  }
}
