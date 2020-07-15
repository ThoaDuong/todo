import { User } from './../users/users.service';
import { TodoService } from './todo.service';
import { UpdateTodoDto, CreateTodoDto } from './todo.dto';
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Req } from "@nestjs/common";
import TodoEntity from "./todo.entity";
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('todo')
export default class TodoController{
    constructor(private todoService: TodoService){};

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllTodo(@Req() req): TodoEntity[]{
        return this.todoService.getAllTodo(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getTodo(@Param('id') todoId: number, @Req() req): TodoEntity{
        return this.todoService.getTodo(todoId, req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createTodo(@Body() createTodo: CreateTodoDto, @Req() req): TodoEntity{
        return this.todoService.createTodo(createTodo, req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateTodo(@Param('id') todoId : number, @Body() updateTodo: UpdateTodoDto, @Req() req): TodoEntity{
        return this.todoService.updateTodo(todoId, updateTodo, req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    destroyTodo(@Param('id') todoId: number, @Req() req): number{
        return this.todoService.deleteTodo(todoId, req.user.userId);
    }
}