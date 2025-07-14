import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers';

@Injectable()
export class PostsService {
  constructor(private readonly userService: UsersService) {}
  public findAll(userId: string) {
    const user = this.userService.findOneById(userId);
    return [
      {
        user: user,
        title: 'Post 1',
        content: 'This is the first post',
      },
      {
        user: user,
        title: 'Post 2',
        content: 'This is the 2nd post',
      },
    ];
  }
}
