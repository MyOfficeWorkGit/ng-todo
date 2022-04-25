import { Subscription } from 'rxjs';
import { ITodo } from './../models/todo.interface';
import { TodoService } from './../services/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../components/new-todo/new-todo.component';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  public todo: ITodo;
  public allTodo: ITodo[];

  constructor(public dialog: MatDialog, private _todoService: TodoService) {}

  ngOnInit(): void {
    this._subscription.add(
      this._todoService.getSelectedTodo().subscribe((data) => {
        this.todo = data;
      })
    );
    this._subscription.add(
      this._todoService.getTodo().subscribe((data) => {
        this.allTodo = data;
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
