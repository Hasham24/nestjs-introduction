import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './providers';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule, TypeOrmModule.forFeature([Post])],
})
export class PostsModule {}
