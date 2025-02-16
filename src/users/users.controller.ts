import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { createUserDto } from './dtos/create-user.dto';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  getUsers() {
    // @Param() param: GetUserParamDto, // @Query('pages', new DefaultValuePipe(1), ParseIntPipe) pages: number, // @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    // console.log(param.isMarried);
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById();
  }

  @Post()
  createUser(@Body() user: createUserDto) {
    return this.usersService.createUser(user);
  }

  @Patch()
  updateUser() {
    return 'User updated succefully';
  }

  @Delete(':id')
  public deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
