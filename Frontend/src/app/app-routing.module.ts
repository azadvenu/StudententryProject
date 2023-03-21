import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'path' },                         //used angular snippets extensions
  { path: 'home', component: HomeComponent },
  { path: 'addnew', component: AddFormComponent },
  { path: 'edit', component: EditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
