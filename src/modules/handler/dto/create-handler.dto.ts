import {
IsOptional,
  IsString,
  IsDate
} from 'class-validator';

export class CreateHandlerDto {
  @IsOptional()
  @IsString()
  readonly jobName: string;
  @IsOptional()
  @IsString()
  readonly ppeName: string;
  @IsOptional()
  @IsString()
  readonly allow: string;
}
