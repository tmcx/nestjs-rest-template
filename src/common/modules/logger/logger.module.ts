import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { Request } from 'express';
import { CORRELATION_ID_HEADER, CorrelationIdMiddleware } from 'src/common/middlewares/correlation-id/correlation-id.middleware';

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            messageKey: 'message',
          }
        },
        messageKey: 'message',
        customProps: (req: Request) => ({
          correlation: req[CORRELATION_ID_HEADER]
        }),
        autoLogging: false,
        serializers: {
          req: () => undefined,
          res: () => undefined,
        }
      }
    }),
  ],
})
export class LoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*');
  }
}
