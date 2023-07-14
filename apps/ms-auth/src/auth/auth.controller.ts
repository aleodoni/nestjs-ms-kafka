import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  GET_USER,
  CREATE_USER,
  GET_ALL_USERS,
  CreateUserDto,
} from 'shared-libs';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern(GET_USER)
  async getUser(@Payload() userId: string) {
    const user = await this.authService.getUser(userId);
    return user;
  }

  @MessagePattern(CREATE_USER)
  async createUser(@Payload() createUserDto: CreateUserDto) {
    return await this.authService.createUser(createUserDto);
  }

  @MessagePattern(GET_ALL_USERS)
  async getAllUsers() {
    const users = await this.authService.getAllUsers();
    return users;
  }
}
