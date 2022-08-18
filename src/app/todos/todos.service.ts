import { EventEmitter } from "@angular/core";
import { ToDo } from "../models/ToDo.model";

export class TodosService {
    private todosList: ToDo[] = [new ToDo('Clean', false, ""), new ToDo('Make the bed', true, Date.now().toString())];
    taskEvent = new EventEmitter<string>();

    addToList(task: {name: string, done: boolean, doneCreated: string}) {
        if(task.name === "" || task.name.length < 5) {
            console.log("Input is empty!");
            this.taskEvent.emit("error")
        }
        else {
            this.todosList.push(task);
            this.taskEvent.emit("success");
        }    
    }

    deleteFromList(task: ToDo) {
        this.todosList.splice(this.todosList.indexOf(task), 1);
        this.taskEvent.emit("success");
    }

    updateStatus(task: ToDo, status: boolean) {
        this.todosList[this.todosList.indexOf(task)].done = status;
        this.todosList[this.todosList.indexOf(task)].doneCreated = Date.now().toString();      
        this.taskEvent.emit("success"); 
    }

    getAllTasks() {
        return this.todosList.slice();
    }
}