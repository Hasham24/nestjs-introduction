import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from '../../users/providers';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    const user = this.userService.findOneById('23123');
    return 'Sample token';
  }
  public isAuth() {
    return true;
  }
}
