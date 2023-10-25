import { Users } from '@prisma/client';
import { CreateUserInput, CreateUserOutput } from '../user.dto';

export abstract class UserRepositoryRules {
  abstract create(input: CreateUserInput): Promise<CreateUserOutput>;
  abstract findByEmail(email: string): Promise<Users | null>;
}
