import { UpdateTodoDto, CreateTodoDto } from './todo.dto';
import { Injectable } from "@nestjs/common";
import TodoEntity from "./todo.entity";

@Injectable()
export class TodoService{
    listTodo: TodoEntity[] = [];

    getAllTodo(user_id: number): TodoEntity[]{
        return this.listTodo.filter(todo => todo.user_id == user_id);
    }

    getTodo(todoId, user_id): TodoEntity{
        const todo = this.listTodo.find(todo => todo.id == todoId && todo.user_id == user_id);
        return todo;
    }

    createTodo(createTodo: CreateTodoDto, user_id: number): TodoEntity{
        const todo: TodoEntity = {
            id: Date.now(),
            title: createTodo.title,
            description: createTodo.description,
            status: 'new',
            user_id: user_id,
        }
        this.listTodo.push(todo);
        return todo;
    }

    deleteTodo(todoId, user_id): number{
        const targetIndex = this.listTodo.findIndex(todo => todo.id == todoId && todo.user_id == user_id);
        this.listTodo.splice(targetIndex, 1);
        return todoId;
    }

    updateTodo(todoId: number, updateTodo: UpdateTodoDto, user_id): TodoEntity{
        const todo = this.listTodo.find(todo => todo.id == todoId && todo.user_id == user_id);
        if(todo){
            todo.title = updateTodo.title || todo.title;
            todo.description = updateTodo.description || todo.description;
            todo.status = updateTodo.status || todo.status;
        }
        return todo;
    }
}