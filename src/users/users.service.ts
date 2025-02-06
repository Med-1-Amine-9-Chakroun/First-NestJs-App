export class UsersService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    { id: 1, name: 'Jhon', age: 28, gender: 'male', isMarried: false },
    { id: 2, name: 'Jhon', age: 28, gender: 'male', isMarried: false },
    { id: 3, name: 'Jhon', age: 28, gender: 'male', isMarried: false },
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
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
  }
}
