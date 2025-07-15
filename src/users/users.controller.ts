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
import { ApiQuery, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto, GetUsersParamsDto, PatchUserDto } from './dtos';
import { UsersService } from './providers';
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  //{/:optional}
  @Get('{/:id}')
  @ApiOperation({ summary: 'Fetch the list of registered users' })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'The number of entries return per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'The position of page number that you want to fetch',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The list of users has been successfully fetched',
  })
  public getUsers(
    @Param() getUsersParamsDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamsDto, limit, page);
  }
  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Patch()
  public patchUsers(@Body() patchUserDto: PatchUserDto) {
    console.log(typeof patchUserDto);
    return 'you sent a get response to user endpoint';
  }
}
