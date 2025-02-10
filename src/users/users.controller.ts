import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { updateUserDto } from './dtos/update-user.dto';

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
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body() user: updateUserDto) {
    console.log(user);
    return 'created';
  }

  @Patch()
  updateUser(@Body() user: updateUserDto) {
    console.log(user);
    return 'User updated succefully';
  }
}
