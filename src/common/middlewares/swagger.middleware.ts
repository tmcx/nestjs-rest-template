import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CONSTANT } from 'src/config/constant.config';

export function SwaggerMiddleware(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle(CONSTANT.SWAGGER.TITLE)
    .setDescription(CONSTANT.SWAGGER.DESCRIPTION)
    .setVersion(CONSTANT.SWAGGER.VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(CONSTANT.SWAGGER.BASE_PATH, app, document);
}
