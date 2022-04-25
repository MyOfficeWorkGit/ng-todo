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
      isArchived: true,
      endDate: '1/25/2022',
    },
    {
      title: 'Serval',
      description: 'Fails serval',
      isCompleted: false,
      isArchived: false,
      endDate: '1/29/2022',
    },
    {
      title: 'Porcupine, tree',
      description: 'Kok KFC',
      isCompleted: false,
      isArchived: false,
      endDate: '3/8/2022',
    },
    {
      title: 'Manatee',
      description: 'Tenacious D',
      isCompleted: true,
      isArchived: true,
      endDate: '8/22/2021',
    },
    {
      title: 'Leopard, indian',
      description: 'Steel Panther',
      isCompleted: true,
      isArchived: true,
      endDate: '4/11/2023',
    },
    {
      title: 'White-mantled colobus',
      description: 'Colobus GoGo',
      isCompleted: true,
      isArchived: true,
      endDate: '5/29/2022',
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._mock
  );
  constructor() {}

  public getTodo(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
}
