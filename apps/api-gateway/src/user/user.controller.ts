import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'shared-libs';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/:userId')
  async get(@Param('userId') userId: string) {
    return await this.userService.get(userId);
  }

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }
}
