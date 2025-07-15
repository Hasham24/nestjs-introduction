import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, GetUsersParamsDto } from '../dtos';
import { User } from '../user.entity';
import { Repository } from 'typeorm';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {
  constructor(
    /**
     * Injecting User repository into UsersService
     * */
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  /**
   * The method to create a new user in the database
   */
  public async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    console.log(existingUser);
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }
  /**
   * The method to get all the users from the database
   */
  public findAll(
    getUsersParamsDto: GetUsersParamsDto,
    limit: number,
    page: number,
  ) {
    console.log(getUsersParamsDto, limit, page);
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
    console.log(id);
    return {
      name: 'John Doe',
      email: 'jhon@gmail.com',
    };
  }
}
