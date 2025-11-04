import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')
  getHello(@Query('name') name?: string): { message: string } {
    // Determine display name
    const displayName = name && name.trim().length > 0 ? name.trim() : 'World';

    // Choose greeting by local server hour
    const hour = new Date().getHours();
    let greeting = 'Hello';
    if (hour >= 5 && hour <= 11) {
      greeting = 'Good morning';
    } else if (hour >= 12 && hour <= 16) {
      greeting = 'Good afternoon';
    } else if (hour >= 17 && hour <= 20) {
      greeting = 'Good evening';
    }

    return { message: `${greeting}, ${displayName}!` };
  }

  @Get()
  getRoot(): { message: string } {
    // Return the same payload as GET /hello so the root path is usable
    return this.getHello();
  }
}