import { Users } from '@prisma/client';

export type CreateUserInput = Omit<Users, 'id'>;
export type CreateUserOutput = Users;
