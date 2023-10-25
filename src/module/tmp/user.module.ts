import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserService } from './services/CreateUser';
import { UserRepository } from './repository/user.repository';
import { UserRepositoryRules } from './repository/rule/user.repository.rules';
import { PrismaService } from 'src/integrations/prismaService';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserService,
    PrismaService,
    {
      provide: UserRepositoryRules,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
