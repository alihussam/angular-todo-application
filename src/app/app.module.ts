import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
    // componenets go here, auto added when component created by cli
    declarations: [
        AppComponent,
        TodosComponent,
        TodoItemComponent,
        HeaderComponent,
        AddTodoComponent
    ],
    // all module go here
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    // services that we want to include
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
