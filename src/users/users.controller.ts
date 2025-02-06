import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const userService = new UsersService();
    return userService.getAllUsers();
  }

  @Post()
  createUser() {
    const user = {
      id: 3,
      name: 'Jhon',
      age: 28,
      gender: 'male',
      isMarried: false,
    };
    const userService = new UsersService();
    return userService.createUser(user);
  }
}
