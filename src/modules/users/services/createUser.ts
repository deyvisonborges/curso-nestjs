import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/integrations/prismaService';
import { CreateUserDto } from '../dto/createUserDto';

@Injectable()
export class CreateUserService {
  constructor(private prisma: PrismaService) {}

  async execute(data: CreateUserDto) {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [{ username: data.username }, { email: data.email }],
      },
    });

    if (user) {
      throw new Error('User already exists!');
    }

    await this.prisma.users.create({
      data,
    });
  }
}
