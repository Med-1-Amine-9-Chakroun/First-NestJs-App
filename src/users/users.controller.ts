import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query() query: any) {
    const userService = new UsersService();
    console.log(query);
    return userService.getAllUsers().filter((x) => x.gender === query.gender);
  }

  @Get(':id')
  getUserById(@Param('id') id: any) {
    const userServie = new UsersService();
    return userServie.getUserById(Number(id));
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
