import { ITodo } from './../../models/todo.interface';
import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() set todo(todo: ITodo) {
    this._todo = todo;
  }
  get todo() {
    return this._todo;
  }

  private _todo: ITodo;
  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  public onCompleteTodo(todo: ITodo) {
    this._todoService.onTodoAction(todo.id, "isCompleted");
  }
  // same method in different ways
  public onArchiveTodo(todo: ITodo) {
    this._todoService.onTodoAction(todo.id, "isArchived");
  }
}
