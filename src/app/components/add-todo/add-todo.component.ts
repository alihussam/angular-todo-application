import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
    title: string;
    @Input() isAddingTodo: boolean;
    @Output() addTodo: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        const todo = {
            title: this.title,
            completed: false,
        }
        this.addTodo.emit(todo);
    }

}
