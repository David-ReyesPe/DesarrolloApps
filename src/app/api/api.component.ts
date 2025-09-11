import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  personajes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.obtenerDatos().subscribe((data: any) => {
      this.personajes = data.results;
    });
  }
}
