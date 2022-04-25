import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _mock: ITodo[] = [
    {
      title: 'Yellow-bellied marmot',
      description: 'Marmots flavor for me',
      isCompleted: false,
      isArchived: false,
      endDate: '1/25/2022',
      selected: true,
    },
    {
      title: 'Serval',
      description: 'Fails serval',
      isCompleted: false,
      isArchived: false,
      endDate: '1/29/2022',
      selected: false,
    },
    {
      title: 'Porcupine, tree',
      description: 'Kok KFC',
      isCompleted: false,
      isArchived: false,
      endDate: '3/8/2022',
      selected: false,
    },
    {
      title: 'Manatee',
      description: 'Tenacious D',
      isCompleted: false,
      isArchived: false,
      endDate: '8/22/2021',
      selected: false,
    },
    {
      title: 'Leopard, indian',
      description: 'Steel Panther',
      isCompleted: false,
      isArchived: false,
      endDate: '4/11/2023',
      selected: false,
    },
    {
      title: 'White-mantled colobus',
      description: 'Colobus GoGo',
      isCompleted: false,
      isArchived: false,
      endDate: '5/29/2022',
      selected: false,
    },
  ];
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._mock
  );
  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this._mock[0]
  );

  constructor() {}

  public getTodo(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }
  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }
}
