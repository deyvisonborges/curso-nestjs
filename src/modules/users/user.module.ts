import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserService } from './services/createUser';
import { PrismaService } from 'src/integrations/prismaService';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserService, PrismaService],
})
export class UserModule {}
