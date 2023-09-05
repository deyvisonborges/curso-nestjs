import { Users } from '@prisma/client';

export type CreateUserDto = Omit<Users, 'id'>;

export type UserCreatedDto = {
  id: string;
  createdAt: Date;
} & CreateUserDto;

export type UsernameAndEmail = {
  email: string;
  username: string;
};
