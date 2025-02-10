import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class createUserDto {
  @IsString({ message: 'name should be a string value ' })
  @IsNotEmpty({ message: 'message' })
  @MinLength(3, { message: 'message' })
  @MaxLength(100)
  firstName: string;

  @IsString({ message: 'name should be a string value ' })
  @IsNotEmpty({ message: 'message' })
  @MinLength(3, { message: 'message' })
  @MaxLength(100)
  lastName: string;

  @IsEmail()
  @IsNotEmpty({ message: 'message' })
  @MaxLength(100)
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  gender: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  password: string;
}
