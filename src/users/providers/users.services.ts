import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos';
import { AuthService } from '../../auth/providers';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  /**
   * The method to get all the users from the database
   */
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
  /**
   * Find a single user using the ID of the user
   */
  public findOneById(id: string) {
    return {
      name: 'John Doe',
      email: 'jhon@gmail.com',
    };
  }
}
