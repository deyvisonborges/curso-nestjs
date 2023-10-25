import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput, CreateUserOutput } from './user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.userRepository.findByEmail(input.email);

    if (!user)
      throw new NotFoundException('User not found with email ' + input.email);

    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }
}
