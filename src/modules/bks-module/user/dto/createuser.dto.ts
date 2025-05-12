import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'name', example: 'Julian Morgan' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'email', example: 'julian@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'password', example: 'Julian@#124' })
  @IsString()
  @IsNotEmpty()
  password: string;

  // @ApiProperty({ description: 'user role' })
  // @IsOptional()
  // @IsEnum(['user', 'admin'], {
  //   message: 'Role must be either "user" or "admin"',
  // })
  // role: UserRole;
}
