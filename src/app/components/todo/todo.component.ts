import { Subscription } from 'rxjs';
import { ITodo } from './../../models/todo.interface';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  public todo: ITodo;
  private _subscription: Subscription = new Subscription();
  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._subscription.add(this._todoService.getSelectedTodo().subscribe(data =>{
      this.todo = data;
    }));
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
  public onCompleteTodo(todo:ITodo){
    todo.isCompleted = true;
  }
  // same method in different ways
  public onArchiveTodo(){
    this.todo.isArchived = true;
  }
}
