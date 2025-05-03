import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'password' })
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
