import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfig } from './config/environment.config';

@Module({
  imports: [
    ConfigModule.forRoot()],
  controllers: [
    AppController,
  ],
  providers: [
    EnvironmentConfig,
    AppService,
  ],
})
export class AppModule { }
