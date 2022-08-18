import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToDo } from './models/ToDo.model';
import { TodosService } from './todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodosService]
})
export class AppComponent implements OnInit{
  title = 'frontend-lbd';
  status: string = "";

  @ViewChild('taskNameInput') input: ElementRef;
  taskList: ToDo[] = [];

  constructor(private todosService: TodosService) {}

  addToList() {
    this.todosService.addToList(new ToDo(this.input.nativeElement.value, false, ""));
    this.input.nativeElement.value="";
    this.input.nativeElement.focus();
  }

  ngOnInit(): void {
    this.taskList = this.todosService.getAllTasks();
    this.todosService.taskEvent.subscribe((status: string) => (this.status = status, this.taskList = this.todosService.getAllTasks()));
  }
}
