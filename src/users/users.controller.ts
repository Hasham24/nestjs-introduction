import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto, GetUsersParamsDto, PatchUserDto } from './dtos';
import { UsersService } from './providers';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  //{/:optional}
  @Get('{/:id}')
  public getUsers(
    @Param() getUsersParamsDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamsDto, limit, page);
  }
  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(typeof createUserDto);
    return 'you sent a get response to user endpoint';
  }
  @Patch()
  public patchUsers(@Body() patchUserDto: PatchUserDto) {
    console.log(typeof patchUserDto);
    return 'you sent a get response to user endpoint';
  }
}
