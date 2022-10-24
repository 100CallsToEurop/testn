import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { HandlerService } from './handler.service';
import { CreateHandlerDto } from './dto/create-handler.dto';

@Controller('data')
export class HandlerController {
  constructor(private readonly handlerService: HandlerService) {}

  @Post()
  async create(@Body() createHandlerDto: CreateHandlerDto) {
    return this.handlerService.create(createHandlerDto);
  }

  @Post('upload')
  async upload(@Body() params: { url: string }) {
    return this.handlerService.upload(JSON.parse(params.url));
  }

  @Post('all')
  async findAll() {
    return this.handlerService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHandlerDto: CreateHandlerDto,
  ) {
    return this.handlerService.update(+id, updateHandlerDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.handlerService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.handlerService.remove(+id);
  }
}
