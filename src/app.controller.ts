import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CONSTANT } from './config/constant.config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags(CONSTANT.SWAGGER.TAGS.ROOT)
  getHello(): string {
    return this.appService.getHello();
  }
}
