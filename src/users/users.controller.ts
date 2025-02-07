import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/create-user.dto';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('pages', new DefaultValuePipe(1), ParseIntPipe) pages: number,
  ) {
    const userService = new UsersService();

    return userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const userServie = new UsersService();
    return userServie.getUserById(Number(id));
  }

  @Post()
  createUser(@Body(new ValidationPipe()) user: createUserDto) {
    return 'created';
  }
}
