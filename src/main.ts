import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GuardsGuard } from 'src/guards/guards.guard';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if(process.env.NODE_ENV !== 'production') {
    app.setGlobalPrefix('api');
  }
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new HttpExceptionFilter());
     app.useGlobalGuards(new GuardsGuard());
     const config = new DocumentBuilder()
    .setTitle('API hoctiengtrungmoingay')
    .setDescription('API hoctiengtrungmoingay')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      name: 'Authorization',
    }, 'access-token')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(process.env.PORT ?? 8888);
}
bootstrap();
