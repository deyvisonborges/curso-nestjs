import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreateUserService } from './services/createUser';
import { CreateUserDto } from './dto/createUserDto';
import { CreateUserValidationPipe } from './pipes/create-user.validation.pipe';

@Controller('/users')
export class UserController {
  constructor(private readonly createUser: CreateUserService) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDto) {
    try {
      await this.createUser.execute(data);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
