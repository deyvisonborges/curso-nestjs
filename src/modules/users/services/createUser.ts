import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/integrations/prismaService';
import { CreateUserDto } from '../dto/user.dto';
import { hash } from 'bcrypt';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDto) {
    const user = await this.userRepository.findByUsernameOrEmail({
      username: data.username,
      email: data.email,
    });

    // where: {
    //   OR: [{ username: data.username }, { email: data.email }],
    // },

    if (user) {
      throw new Error('User already exists!');
    }

    const password = await hash(data.password, 10);
    // await this.prisma.users.create({
    //   data: { ...data, password: passwordHashed },
    // });

    return this.userRepository.save({ ...data, password });
  }
}
