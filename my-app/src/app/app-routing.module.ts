import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RegisterComponent } from './Features/login/register/register.component';
import { LoginComponent } from './Features/login/login.component';
import { AboutMeComponent } from './about-me/about-me.component';

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
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: '',
    redirectTo: 'List',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'List'
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
