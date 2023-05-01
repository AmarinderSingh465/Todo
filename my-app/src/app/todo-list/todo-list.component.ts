import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/assets/shared/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  todos: Todo[] = [
    { title: 'Learn Angular', completed: false },
    { title: 'Build a to-do list', completed: false },
    { title: 'Deploy the app', completed: false }
  ];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ title: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
