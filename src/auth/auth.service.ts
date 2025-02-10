import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
  ) {}

  isAuthenticated: boolean = false;

  login(email: string, pass: string) {
    const user = this.userService.users.find(
      (x) => x.email === email && x.pass === pass,
    );
    if (user) {
      this.isAuthenticated = true;
      return 'user exist';
    }
    return 'user does not exist';
  }
}
