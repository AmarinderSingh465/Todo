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
    
    this.filteredTodos=this.todos;

  }
  filteredTodos: Todo[] = [];
  todos: Todo[] = [
    { title: 'Learn Angular', completed: false },
    { title: 'Build a to-do list', completed: false },
    { title: 'Deploy the app', completed: false }
  ];
  newTodo: string = '';
  searchItem: string = '';
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
    this.search();
  }
  search() {
    // Reset the filteredTodos array
    this.filteredTodos = [];

    // If there is a search term
    if (this.searchItem.trim() !== '') {
      const searchTerm = this.searchItem.toLowerCase().trim();
      this.filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm)
      );
    } else {
      // If there is no search term, show all todos
      this.filteredTodos = this.todos;
    }
  }
}
