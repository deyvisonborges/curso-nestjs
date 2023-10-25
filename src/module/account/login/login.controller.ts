import { Body, Controller, Post } from '@nestjs/common';
import { LoginInput } from './login.dto';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/login')
  async execute(@Body() input: LoginInput) {
    await this.loginService.execute(input);
  }
}
