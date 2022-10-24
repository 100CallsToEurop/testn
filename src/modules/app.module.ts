import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'src/common/config/typeorm.config';
import { HandlerModule } from './handler/handler.module';


@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmConfigService()),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env',
    }),
    HandlerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
