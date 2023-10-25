import { PrismaService } from 'src/integrations/prismaService';
import {
  UsernameAndEmail,
  UserCreatedDto,
  CreateUserDto,
} from '../dto/user.dto';
import { UserRepositoryRules } from './rule/user.repository.rules';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements UserRepositoryRules {
  constructor(private prisma: PrismaService) {}

  async findByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDto> {
    return null;
  }

  async save(data: CreateUserDto): Promise<UserCreatedDto | null> {
    return null;
  }
}
