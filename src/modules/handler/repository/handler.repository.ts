import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHandlerDto } from '../dto/create-handler.dto';
import { Data } from '../entities/handler.entity';

@Injectable()
export class HandlerRepository {
  constructor(
    @InjectRepository(Data)
    private readonly dataRepository: Repository<Data>,
  ) {}

  async create(dataParams: CreateHandlerDto) {
    const newData = new Data();
    newData.jobName = dataParams.jobName;
    newData.ppeName = dataParams.ppeName;
    newData.allow = dataParams.allow;

    return await this.dataRepository.save(newData);
  }

  async update(id: number, updateParams: CreateHandlerDto) {
    const data = await this.dataRepository.findOneBy({ id });

    const isUpdate = await this.dataRepository.save({
      ...data,
      ...updateParams,
    });
    return isUpdate ? await this.findOne(id) : null;
  }

  async findAll() {
    return await this.dataRepository.find();
  }

  async findOne(id: number) {
    return await this.dataRepository.findBy({ id });
  }

  async remove(id: number) {
    const remove = await this.dataRepository.delete({ id });
    return remove ? true : false;
  }
}
