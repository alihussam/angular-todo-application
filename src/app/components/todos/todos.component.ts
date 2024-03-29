import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    todos: Todo[];
    isAddingTodo: boolean = false;

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter(t => t.id !== todo.id);
        this.todoService.deleteTodo(todo).subscribe();
    }

    addTodo(todo: Todo) {
        this.isAddingTodo = true;
        this.todoService.addTodo(todo).subscribe(todo => {
            this.isAddingTodo = false;
            this.todos.push(todo);
        });
    }

}
