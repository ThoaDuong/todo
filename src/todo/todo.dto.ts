import { IsNotEmpty } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

export class CreateTodoDto{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}

export class UpdateTodoDto{
    title?: string;
    description?: string;
    status?: 'new'|'done';
}