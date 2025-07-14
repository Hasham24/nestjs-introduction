import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos';
import { AuthService } from '../../auth/providers';
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUsersParamsDto: GetUsersParamsDto,
    limit: number,
    page: number,
  ) {
    const isAuthenticated = this.authService.isAuth();
    console.log(isAuthenticated);
    return [
      {
        name: 'John Doe',
        email: 'jhon@gmail.com',
      },
      {
        name: 'Ali Doe',
        email: 'Ali@gmail.com',
      },
    ];
  }
  public findOneById(id: string) {
    return {
      name: 'John Doe',
      email: 'jhon@gmail.com',
    };
  }
}
