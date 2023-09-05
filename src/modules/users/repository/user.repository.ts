import { PrismaService } from 'src/integrations/prismaService';
import {
  UsernameAndEmail,
  UserCreatedDto,
  CreateUserDto,
} from '../dto/user.dto';
import { UserRepositoryRules } from './rule/user.repository.rules';

export class UserRepository implements UserRepositoryRules {
  constructor(private prisma: PrismaService) {}

  findByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDto> {
      return await this.prisma.

    throw new Error('Method not implemented.');
  }

  save(data: CreateUserDto): UserCreatedDto {
    throw new Error('Method not implemented.');
  }
}
