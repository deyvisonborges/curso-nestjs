import { Users } from '@prisma/client';
import {
  CreateUserDto,
  UserCreatedDto,
  UsernameAndEmail,
} from '../../dto/user.dto';
export abstract class UserRepositoryRules {
  abstract findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreatedDto> | null;
  abstract save(data: CreateUserDto): Users;
}
