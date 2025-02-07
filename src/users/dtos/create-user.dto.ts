import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class createUserDto {
  @IsNumber()
  id: number;
  @IsString({ message: 'name should be a string value ' })
  @IsNotEmpty({ message: 'message' })
  @MinLength(3, { message: 'message' })
  name: string;
  @IsEmail()
  email: string;
  age: number;
  @IsString()
  gender: string;
  @IsBoolean()
  isMarried: boolean;
}
