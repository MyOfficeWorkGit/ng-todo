import { TodoService } from './../../services/todo.service';
import { ITodo } from './../../models/todo.interface';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent{
  @Input() allTodo: Array<ITodo> = [];
  constructor(private _todoService: TodoService) {}

  public onTodoClick(todo: ITodo, index: number) {
    this._todoService.setSelectedTodo(todo);
    this.allTodo.forEach((todo) => {
      if(todo.selected){
        todo.selected = false;
      }
    });
    this.allTodo[index].selected = true;
  }
}
