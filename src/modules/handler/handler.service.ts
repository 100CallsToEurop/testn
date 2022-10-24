import { Injectable } from '@nestjs/common';
import { CreateHandlerDto } from './dto/create-handler.dto';
import { HandlerRepository } from './repository/handler.repository';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class HandlerService {
  constructor(
    private readonly httpService: HttpService,
    private readonly handlerRepository: HandlerRepository,
  ) {}

  async create(createParams: CreateHandlerDto) {
    await this.handlerRepository.create(createParams);
  }

  async upload(objs: Array<any>) {
    for (let i = 0; i < objs.length; i++) {
      const newParams: CreateHandlerDto = {
        jobName: objs[i].jobName,
        ppeName: objs[i].ppeName,
        allow: objs[i].allow,
      };
      await this.create(newParams);
    }
  }

  async findAll() {
    return await this.handlerRepository.findAll();
  }

  async update(id: number, updateParams: CreateHandlerDto) {
    await this.handlerRepository.update(id, updateParams);
  }

  async findOne(id: number) {
    return await this.handlerRepository.findOne(id);
  }

  async remove(id: number) {
    await this.handlerRepository.remove(id);
  }

  private async getRequest(url: string) {
    return await lastValueFrom(
      this.httpService
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .pipe(map((response) => response.data)),
    );
  }
}
