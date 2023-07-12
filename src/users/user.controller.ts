import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/hello')
  hello() {
    return 'Seja bem vindo ao curso de Nest.js';
  }
}
