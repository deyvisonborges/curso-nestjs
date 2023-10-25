import { Injectable } from '@nestjs/common';
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

    if (user) {
      throw new Error('User already exists!');
    }

    const password = await hash(data.password, 10);

    return this.userRepository.save({ ...data, password });
  }
}
