import { Component, Input } from "@angular/core";
import { ToDo } from "../models/ToDo.model";
import { TodosService } from "../todos/todos.service";

@Component({
    selector: 'app-todoItem',
    templateUrl: 'todoItem.component.html'
})
export class TodoItemCompopnent {
    constructor(private toDoService: TodosService) {}

    @Input() item;

    checkClicked(task: ToDo) {
        this.toDoService.updateStatus(task, !task.done);
    }

    deleteTask(task: ToDo) {
        this.toDoService.deleteFromList(task);
    }
}