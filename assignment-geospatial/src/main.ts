import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:'*'})
  const config = new DocumentBuilder()
    .setTitle('GeoSpatial Swagger')
    .setDescription('GeoSpatial Assignment')
    .setVersion('1.0')
    .addTag('geospatial')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
}
bootstrap();
