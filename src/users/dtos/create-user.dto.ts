import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

export class createUserDto {
  @IsEmail()
  @IsNotEmpty({ message: 'message' })
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(24)
  userName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(100)
  password: string;

  @IsOptional()
  profile?: CreateProfileDto;
}
