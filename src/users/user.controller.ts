import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Controller('/user')
export class UserController {
  @Get('/hello')
  hello() {
    return 'Seja bem vindo ao curso de Nest.js';
  }

  /**
   * localhost:3000/users?p=10&r=100
   */
  @Get('/pages')
  findByPages(@Query() queries: any) {
    return 'Queries ' + JSON.stringify(queries);
  }

  /**
   * Find user by id
   * localhost:3000/user/123123
   * @param id
   */
  @Get('/:id')
  findById(@Param() params: { id: string }) {
    return `usuario + ${params.id}`;
  }
  // @Get('/user/:id')
  // findById(@Param('id') id: string) {
  //   return `usuario + ${id}`;
  // }

  @Post('/create')
  create(@Body() data: { name: string; age: number }) {
    return {
      ...data,
      id: randomUUID(),
    };
  }
}
