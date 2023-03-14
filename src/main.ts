import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerMiddleware } from './common/middlewares/swagger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerMiddleware(app);

  const port = process.env.SERVICE_PORT || 3000;
  await app.listen(port);
}

bootstrap();
