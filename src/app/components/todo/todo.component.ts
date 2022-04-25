import { ITodo } from './../../models/todo.interface';
import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  public onCompleteTodo(todo: ITodo) {
    todo.isCompleted = true;
  }
  // same method in different ways
  public onArchiveTodo() {
    this.todo.isArchived = true;
  }
}
