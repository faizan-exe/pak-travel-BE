import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';


export class createPostDto {
    

    @IsString()
    @IsNotEmpty()
    review: string;

    @IsNumber()
    @IsNotEmpty()
    ratings_stars: number;

    @IsString()
    img_url: number;

  
}
