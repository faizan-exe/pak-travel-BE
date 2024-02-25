// signup.dto.ts
import { IsEmail, IsNotEmpty, IsString, IsOptional, IsNumber, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class PreferencesDto {
  @IsNumber()
  @IsOptional()
  budget?: number;

  @IsString()
  @IsOptional()
  travel_type?: string;

  @IsNumber()
  @IsOptional()
  distance?: number;
}

export class SignupDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  phone_no?: string;

  @IsEmail()
  email: string;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => PreferencesDto)
  preferences?: PreferencesDto;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  current_location?: string;
}
