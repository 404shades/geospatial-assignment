import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PointsModule } from './points/points.module';
import { PolygonsModule } from './polygons/polygons.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true,cache:true,}),
    MongooseModule.forRootAsync({
    useFactory: async (configService:ConfigService)=>({
      uri: configService.get<string>('MONGODB_URL'),
    }),
    inject: [ConfigService],
  }),
    PointsModule,
    PolygonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
