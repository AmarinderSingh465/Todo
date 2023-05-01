import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RegisterComponent } from './Features/login/register/register.component';
import { LoginComponent } from './Features/login/login.component';

const routes: Routes = [

  {
    path: 'List',
    component: TodoListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'List',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'List'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
