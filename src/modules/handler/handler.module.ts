import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { HandlerService } from './handler.service';
import { HandlerController } from './handler.controller';
import { HandlerRepository } from './repository/handler.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './entities/handler.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data]), HttpModule],
  controllers: [HandlerController],
  providers: [HandlerService, HandlerRepository],
})
export class HandlerModule {}
