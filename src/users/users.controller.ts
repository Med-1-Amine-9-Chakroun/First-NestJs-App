import { Controller, Get, Post } from '@nestjs/common';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get('all')
  getUsers() {
    return 'You made a Get request to get all users ';
  }

  @Post()
  createUser() {
    return 'User created';
  }
}
