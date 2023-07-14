import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from 'shared-libs';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async getUser(userId: string): Promise<any> {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async getAllUsers(): Promise<any> {
    return await this.prisma.user.findMany();
  }

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const userCreated = await this.prisma.user.create({
      data: {
        id: createUserDto.userId,
        name: createUserDto.name,
      },
    });

    return {
      message: 'user created',
      data: {
        userId: userCreated.id,
        name: userCreated.name,
      },
    };
  }
}
