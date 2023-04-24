import { ValidationPipe, Logger as NestJSLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerMiddleware } from './common/middlewares/swagger/swagger.middleware';
import { EnvironmentConfig } from './config/environment.config';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger));

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true
    })
  );
  SwaggerMiddleware(app);

  const port = app.get(EnvironmentConfig).get('SERVICE_PORT') || 3000;
  await app.listen(port, () => NestJSLogger.log(`Service running on port: ${port}`, 'NestApplication'));
}

bootstrap();
