import { Routes } from '@angular/router';
import { SumaComponent } from './suma/suma.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ApiComponent } from './api/api.component';

export const routes: Routes = [
    {path: 'suma', component: SumaComponent},
    {path: 'ToDo', component: ToDoComponent},
    {path: 'api', component: ApiComponent},
];
