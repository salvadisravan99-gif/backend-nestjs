import { Controller, Get } from '@nestjs/common';

@Controller('news')
export class NewsController {
  @Get()
  list() {
    return [{ title: 'Welcome', content: 'System Live' }];
  }
}
