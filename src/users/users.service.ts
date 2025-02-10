import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    {
      id: 1,
      name: 'Jhon',
      email: 'jhon@doe.com',
      age: 28,
      gender: 'female',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Jhon',
      email: 'jhon@doe.com',
      age: 28,
      gender: 'male',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Jhon',
      email: 'jhon@doe.com',
      age: 28,
      gender: 'male',
      isMarried: false,
    },
  ];

  getAllUsers() {
    return this.users;
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

    isMarried: boolean;
  }) {
    this.users.push(user);
    return this.users;
  }
}
