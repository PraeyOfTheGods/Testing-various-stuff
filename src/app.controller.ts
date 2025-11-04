import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')
  getHello(): string {
    return 'Hello World';
  }

  @Get()
  getRoot(): string {
    return 'Hello World';
  }
}