import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test/:params')
  getParams(@Param('params') params): string {
    return this.appService.getParams(params);
  }
}
