import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() 
{
   const app = await NestFactory.create(AppModule);
   
   app.use(helmet());
   app.enableCors({
      origin: ['http://localhost:3000'],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204
   });
   app.setGlobalPrefix('api/v1');
   await app.listen(3000);
}

bootstrap();
