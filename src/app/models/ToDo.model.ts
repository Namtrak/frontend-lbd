export class ToDo {
    name: string;
    done: boolean;
    doneCreated: string;

    constructor(name: string, done: boolean, doneCreated: string) {
        this.name = name;
        this.done = done;
        this.doneCreated = doneCreated;
    }
}