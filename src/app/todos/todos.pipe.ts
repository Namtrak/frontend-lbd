import { Pipe, PipeTransform } from "@angular/core";
import { ToDo } from "../models/ToDo.model";

@Pipe({name: 'tasksDone'})
export class ToDosPipe implements PipeTransform{
    transform(todos: ToDo[]) {
        return todos.filter(todo => todo.done);
    }
}

@Pipe({name: 'tasksNotDone'})
export class ToDosPipe1 implements PipeTransform{
    transform(todos: ToDo[]) {
        return todos.filter(todo => !todo.done);
    }
}