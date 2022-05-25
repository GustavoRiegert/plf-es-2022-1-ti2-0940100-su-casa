import { Residence } from '../entities/residence.entity';
import {
  IsEmail,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends Residence {
  @IsEmail()
  cep: string;

  @IsString()
  estado: string;

  @IsString()
  ciade: string;

  @IsString()
  rua: string;

  @IsString()
  numero: string;
}
