import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostsService } from './providers';
import { CreatePostDto } from './dtos';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get('{/:userId}')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }
}
