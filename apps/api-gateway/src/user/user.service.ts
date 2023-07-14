import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import {
  CREATE_USER,
  GET_USER,
  GET_ALL_USERS,
  CreateUserDto,
} from 'shared-libs';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly clientKafka: ClientKafka,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    return this.clientKafka.send(CREATE_USER, createUserDto);
  }

  async get(id: string): Promise<any> {
    return this.clientKafka.send(GET_USER, id);
  }

  async getAll(): Promise<any> {
    return this.clientKafka.send(GET_ALL_USERS, '');
  }

  async onModuleInit() {
    this.clientKafka.subscribeToResponseOf(CREATE_USER);
    this.clientKafka.subscribeToResponseOf(GET_USER);
    this.clientKafka.subscribeToResponseOf(GET_ALL_USERS);
    await this.clientKafka.connect();
  }
}
