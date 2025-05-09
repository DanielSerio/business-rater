import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { jwtDecode } from 'jwt-decode';
import { BadRequestException } from '@nestjs/common';
import { SessionPayload } from './shared/types/jwt.types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173'
    ],
    exposedHeaders: [
      'access-control-allow-origin',
      'content-type',
      'authorization',
      'x-authorization',
      'x-refresh',
      'refresh'
    ],
    allowedHeaders: [
      'access-control-allow-origin',
      'content-type',
      'x-authorization',
      'x-refresh',
      'authorization',
      'refresh'
    ]
  });

  app.use((req, res, next) => {
    if (req.headers['authorization']) {
      const token = req.headers['authorization'].replace(/^bearer\s+/i, '');
      const decodedValue = jwtDecode(token);

      if (!decodedValue) {
        throw new BadRequestException();
      }

      res.auth = decodedValue as SessionPayload;
    }

    next();
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
