import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/integrations/prismaService';
import { CreateUserInput, CreateUserOutput } from '../user.dto';
import { UserRepositoryRules } from './user.repository.rules';
import { Users } from '@prisma/client';

@Injectable()
export class UserRepository implements UserRepositoryRules {
  constructor(private prismaService: PrismaService) {}

  async findByEmail(email: string): Promise<Users | null> {
    return await this.prismaService.users.findFirst({
      where: {
        email: email,
      },
    });
  }

  async create(input: CreateUserInput): Promise<CreateUserOutput> {
    return await this.prismaService.users.create({ data: input });
  }
}
