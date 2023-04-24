import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfig } from './config/environment.config';
import { LoggerModule } from './common/modules/logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule
  ],
  controllers: [
    AppController,
  ],
  providers: [
    EnvironmentConfig,
    AppService,
  ],
})
export class AppModule { }
