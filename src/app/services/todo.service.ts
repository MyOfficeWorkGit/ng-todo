import { ITodo } from './../models/todo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _allTodo: Array<ITodo> = [];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._allTodo
  );
  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this._allTodo.length ? this._allTodo[0] : null
  );

  constructor() {}

  public getTodo(): Observable<Array<ITodo>> {
    if (!this._todoSubject.value.length) {
      const todoString = localStorage.getItem('allTodo');

      if (todoString) {
        const existingTodo: Array<ITodo> = JSON.parse(todoString);
        existingTodo.forEach((item) => {
          item.selected = false;
        });

        this._todoSubject.next(existingTodo);
      }
    }
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }
  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }
  public addNewTodo(newTodo: ITodo) {
    //take existing all todo
    //add new todo
    //trigger next tic in observable

    const existingTodo: Array<ITodo> = this._todoSubject.value;
    existingTodo.forEach((item) => {
      item.selected = false;
    });

    existingTodo.push(newTodo);
    this._todoSubject.next(existingTodo);
    localStorage.setItem('allTodo', JSON.stringify(existingTodo));
  }
  public onTodoAction(todoId: string, action: string) {
    const existingTodo: Array<ITodo> = this._todoSubject.value;
    const todoIndex = existingTodo.findIndex(
      (singleTodo) => singleTodo.id == todoId
    );

    existingTodo[todoIndex][action] = true;
    this._todoSubject.next(existingTodo);
    localStorage.setItem('allTodo', JSON.stringify(existingTodo));
  }

}
