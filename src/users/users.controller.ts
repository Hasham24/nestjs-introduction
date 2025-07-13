import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
@Controller('users')
export class UsersController {
  //{/:optional}
  @Get('{/:id}')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit);
    console.log(page);
    return 'you sent a get response to user endpoint';
  }
  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'you sent a get response to user endpoint';
  }
}
