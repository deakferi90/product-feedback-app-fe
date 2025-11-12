import { Routes } from '@angular/router';
import { Editfeedback } from './editfeedback/editfeedback';
import { Suggestions } from './suggestions/suggestions';

export const routes: Routes = [
  { path: '', component: Suggestions },
  { path: 'edit-feedback/:id', component: Editfeedback },
];
