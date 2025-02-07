import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { updateUserDto } from './dtos/update-user.dto';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get(':isMarried')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('pages', new DefaultValuePipe(1), ParseIntPipe) pages: number,
    @Param() param: GetUserParamDto,
  ) {
    const userService = new UsersService();
    console.log(param.isMarried);
    return userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const userServie = new UsersService();
    return userServie.getUserById(Number(id));
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
