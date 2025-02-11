import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  getUserById() {}

  public async createUser(userDto: createUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: userDto.email,
      },
    });

    if (user) {
      return 'Email used';
    }
    let newUser = this.userRepository.create(userDto);

    newUser = await this.userRepository.save(newUser);

    return newUser;
  }
}
