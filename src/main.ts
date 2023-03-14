import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerMiddleware } from './common/middlewares/swagger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerMiddleware(app);

  await app.listen(3000);
}
bootstrap();
