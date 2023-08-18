import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserService } from './services/createUser';
import { CreateUserDto } from './dto/createUserDto';

@Controller('/users')
export class UserController {
  constructor(private readonly createUser: CreateUserService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    try {
      await this.createUser.execute(data);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
