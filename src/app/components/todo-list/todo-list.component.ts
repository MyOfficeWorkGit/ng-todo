import { TodoService } from './../../services/todo.service';
import { ITodo } from './../../models/todo.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todo: Array<ITodo> = [];
  private _subscription: Subscription = new Subscription();

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._subscription.add(
      this._todoService.getTodo().subscribe((data) => {
        this.todo = data;
      })
    );
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public onTodoClick(todo: ITodo, index: number) {
    this._todoService.setSelectedTodo(todo);
    this.todo.forEach((todo) => {
      if(todo.selected){
        todo.selected = false;
      }
    });
    this.todo[index].selected = true;
  }
}
