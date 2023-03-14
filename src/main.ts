import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerMiddleware } from './common/middlewares/swagger.middleware';
import { EnvironmentConfig } from './config/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerMiddleware(app);

  const port = app.get(EnvironmentConfig).get('SERVICE_PORT') || 3000;
  await app.listen(port, () => Logger.log(`Service running on port: ${port}`, 'NestApplication'));
}

bootstrap();
