import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  getAllUsers() {
    return this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }

  getUserById() {}

  public async createUser(userDto: createUserDto) {
    userDto.profile = userDto.profile ?? {};

    const user = this.userRepository.create(userDto);

    return await this.userRepository.save(user);
  }

  public async deleteUser(id: number) {
    let user = await this.userRepository.findOneBy({ id });

    await this.userRepository.delete(id);

    if (!user || !user.profile) {
      throw new Error('User or Profile not found');
    }

    await this.profileRepository.delete(user.profile.id);

    return { delete: true };
  }
}
