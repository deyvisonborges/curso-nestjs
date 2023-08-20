import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/integrations/prismaService';
import { CreateUserDto } from '../dto/createUserDto';
import { hash } from 'bcrypt';

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

    const passwordHashed = await hash(data.password, 10);

    await this.prisma.users.create({
      data: { ...data, password: passwordHashed },
    });
  }
}
