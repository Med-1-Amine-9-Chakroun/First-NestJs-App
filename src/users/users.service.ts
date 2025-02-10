import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
    gender: string;
    isMarried: boolean;
    pass: string;
  }[] = [
    {
      id: 1,
      name: 'Jhon',
      email: 'jhon@doe.com',
      age: 28,
      gender: 'female',
      isMarried: false,
      pass: '123456',
    },
    {
      id: 2,
      name: 'Jhon',
      email: 'jhon@doe.com',
      age: 28,
      gender: 'male',
      isMarried: true,
      pass: '123456',
    },
    {
      id: 3,
      name: 'Jhon',
      email: 'jhon@doe.com',
      age: 28,
      gender: 'male',
      isMarried: false,
      pass: '123456',
    },
  ];

  getAllUsers() {
    if (this.authService.isAuthenticated === true) {
      return this.users;
    }
    return 'you should be authenticated';
  }

  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    age: number;
    email: string;
    gender: string;
    pass: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
    return this.users;
  }
}
