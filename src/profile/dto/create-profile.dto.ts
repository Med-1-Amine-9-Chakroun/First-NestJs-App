import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProdileDto {
  @IsString({ message: 'firstname should be a string value ' })
  @MinLength(3, { message: 'message' })
  @IsOptional()
  @MaxLength(100)
  firstName?: string;

  @IsString({ message: 'lastname should be a string value ' })
  @MinLength(3, { message: 'message' })
  @IsOptional()
  @MaxLength(100)
  lastName?: string;

  @IsString({ message: 'gender should be a string value ' })
  @IsOptional()
  @MaxLength(100)
  gender?: string;

  @IsDate()
  @IsOptional()
  dateOfBirth: Date;

  @IsString({ message: 'bio should be a string value ' })
  @IsOptional()
  bio: string;

  @IsOptional()
  @IsString()
  profileImage: string;
}
