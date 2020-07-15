import { AppController } from './app.controller';
import { TodoService } from './todo/todo.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import TodoController from './todo/todo.controller';


@Module({
  imports: [
    AuthModule, 
    UsersModule,
  ],
  controllers: [AppController, TodoController],
  providers: [TodoService, UsersService],
})
export class AppModule {
}
