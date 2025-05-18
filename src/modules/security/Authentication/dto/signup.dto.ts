import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({ description: 'name', example: 'Julian Morgan' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'user email', example: 'julian@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'user password', example: 'Julian@#124' })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
