import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')
  getHello(): { message: string } {
    return { message: 'Hello World ' };
  }

  @Get()
  getRoot(): { message: string } {
    // Return the same payload as GET /hello so the root path is usable
    return this.getHello();
  }
}